const DRUGS = [
{
name:"Metformin",
class:"Biguanide",
moa:"Decreases hepatic glucose production",
use:"Type 2 Diabetes"
},
{
name:"Atorvastatin",
class:"Statin",
moa:"Inhibits HMG-CoA reductase",
use:"Hyperlipidemia"
},
{
name:"Lisinopril",
class:"ACE inhibitor",
moa:"Blocks conversion of angiotensin I to II",
use:"Hypertension"
}
];

const CASES = [
{
q:"Patient with high LDL — best drug?",
a:"Statin"
},
{
q:"First-line for type 2 diabetes?",
a:"Metformin"
}
];

const ANTIDOTES = [
{drug:"Paracetamol", antidote:"N-acetylcysteine"},
{drug:"Opioids", antidote:"Naloxone"},
{drug:"Warfarin", antidote:"Vitamin K"}
];

const INTERACTIONS = [
{
drugs:["warfarin","nsaids"],
effect:"⚠️ Major bleeding risk"
}
];
