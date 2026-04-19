const drugs = [
 {name:"Metformin", class:"Biguanide", use:"Diabetes", moa:"↓ hepatic glucose"},
 {name:"Atorvastatin", class:"Statin", use:"Cholesterol", moa:"HMG-CoA reductase inhibitor"},
 {name:"Amlodipine", class:"CCB", use:"Hypertension", moa:"↓ calcium influx"},
 {name:"Salbutamol", class:"SABA", use:"Asthma", moa:"β2 agonist bronchodilation"}
];

const antidotes = [
 "Paracetamol → N-acetylcysteine",
 "Opioid → Naloxone",
 "Benzodiazepine → Flumazenil",
 "Heparin → Protamine",
 "Warfarin → Vitamin K"
];

const interactions = [
 {d1:"warfarin", d2:"aspirin", result:"Major bleeding risk"},
 {d1:"ace inhibitor", d2:"spironolactone", result:"Hyperkalemia risk"}
];
