let bank_sbi={
    bank_name : "Bank Of maharashtra",
    Auction_id:"342563",
    time:"9am to 5pm",
    b_managerName:"XYZ",
    
   
}
let bank_loccation={
    street:"AMG Road",
    city:"Solapur",
    pin_code:"417425"
}
let objectclone=Object.assign({},bank_sbi,bank_loccation)
console.log("using assign:",objectclone);
 let string={...bank_sbi,...bank_loccation}
 console.log("using Spread operator:",string);
 console.table(string);

 let rate_of_interest={
    home_loan_interest:"7.20% p.a to 7.65% p.a",
    personal_loan_interest:"Between 8% p.a to 49% p.a",
    due_interest:"$ 200"
 }
 let sbi_details=Object.assign({},bank_sbi,bank_loccation,rate_of_interest)
console.log(sbi_details);
console.table(sbi_details);
//traverse object
for (const index in sbi_details) {
    const element = sbi_details[index];
    console.log(element);
}