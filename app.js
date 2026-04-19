:::writing{variant=“standard” id=“20004”}
function showTab(tab){
document.querySelectorAll(’.tab’).forEach(t=>t.classList.remove(‘active’));
document.getElementById(tab).classList.add(‘active’);
}

function greeting(){
let h=new Date().getHours();
document.getElementById(“greeting”).innerText=
h<12?“Good Morning”:h<18?“Good Afternoon”:“Good Evening”;
}
greeting();

function renderDrugs(){
let val=document.getElementById(“search”).value?.toLowerCase()||””;
let list=document.getElementById(“drugList”);
list.innerHTML=””;
DRUGS.filter(d=>d.name.toLowerCase().includes(val)).forEach(d=>{
list.innerHTML+=`
<div class="drug">
<b>${d.name}</b><br>
Class: ${d.class}<br>
MOA: ${d.moa}<br>
Use: ${d.use}
</div>`;
});
}
renderDrugs();
let caseIndex=0;
function nextCase(){
let c=CASES[caseIndex%CASES.length];
document.getElementById(“caseBox”).innerText=c.q+” → “+c.a;
caseIndex++;
}
nextCase();

let flip=false;
function flipCard(){
let d=DRUGS[Math.floor(Math.random()*DRUGS.length)];
document.getElementById(“flashcard”).innerText=
flip? “Tap to Start” : d.name+” → “+d.moa;
flip=!flip;
}

let qIndex=0;
function loadQuiz(){
let q=CASES[qIndex%CASES.length];
document.getElementById(“question”).innerText=q.q;
let optBox=document.getElementById(“options”);
optBox.innerHTML=””;
[“Statin”,“Metformin”,“ACE inhibitor”].forEach(opt=>{
let btn=document.createElement(“button”);
btn.innerText=opt;
btn.onclick=()=>{
document.getElementById(“explanation”).innerText=
opt===q.a?“Correct”:“Review concept”;
};
optBox.appendChild(btn);
});
}
loadQuiz();

function checkInteraction(){
let input=document.getElementById(“intInput”).value.toLowerCase();
let found=INTERACTIONS.find(i=>i.drugs.every(d=>input.includes(d)));
document.getElementById(“intResult”).innerText=
found?found.effect:“No major interaction”;
}

function loadAntidotes(){
let div=document.getElementById(“antidoteList”);
ANTIDOTES.forEach(a=>{
div.innerHTML+=<div>${a.drug} → ${a.antidote}</div>;
});
}
loadAntidotes();
:::
