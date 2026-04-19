function showTab(tab){
 document.querySelectorAll('.container').forEach(e=>e.style.display='none');
 document.getElementById(tab).style.display='block';
}

// Greeting
let h=new Date().getHours();
document.getElementById("greeting").innerText=
 h<12?"Good Morning":h<18?"Good Afternoon":"Good Evening";

// Drugs
function loadDrugs(list){
 let html="";
 list.forEach(d=>{
   html+=`<div class="card">
   <b>${d.name}</b><br>
   ${d.class}<br>${d.use}<br>${d.moa}
   </div>`;
 });
 document.getElementById("drugList").innerHTML=html;
}
loadDrugs(drugs);

function searchDrug(val){
 let f=drugs.filter(d=>d.name.toLowerCase().includes(val.toLowerCase()));
 loadDrugs(f);
}

// Flashcards
let i=0;
function nextFlash(){
 let d=drugs[i%drugs.length];
 document.getElementById("flashcard").innerText=
   `${d.name} → ${d.moa}`;
 i++;
}
nextFlash();

// Quiz
let score=0,total=0;
const q={q:"Statins MOA?",a:"HMG-CoA inhibitor"};
document.getElementById("question").innerText=q.q;

function answer(ans){
 total++;
 if(ans==="a"){score++; alert("Correct");}
 else alert("Wrong");
 document.getElementById("accuracy").innerText=Math.round(score/total*100);
}

// Interaction
function checkInteraction(){
 let a=document.getElementById("int1").value.toLowerCase();
 let b=document.getElementById("int2").value.toLowerCase();
 let res=interactions.find(x=>
   (x.d1===a && x.d2===b)||(x.d1===b && x.d2===a));
 document.getElementById("interactionResult").innerText=
   res?res.result:"No major interaction";
}

// Antidotes
let html="";
antidotes.forEach(a=>html+=`<div class="card">${a}</div>`);
document.getElementById("antidoteList").innerHTML=html;
