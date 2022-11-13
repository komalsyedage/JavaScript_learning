console.log("step 1.**********************************************");
function maleMarriageEligibility( gender,age,candidate_name){
if (gender== "Male" && age>=21){
console.log(`Hey  ${candidate_name} You are eligible for Marriage`);
}
else{
    console.log(`Hey ${candidate_name}  you are Not eligible for marriage`);
}

}
maleMarriageEligibility("Male",25,"billgates")
maleMarriageEligibility("Male",17,"Stew Jobs")

console.log("step 2.***************************************************");
function femaleMarriageEligibility(gender,age,girlName){
  if (gender=="Female" && age>=18){
    console.log(`Hey ${girlName} You are Eligible for Marriage` );
  }
  else{
    console.log(`Hey ${girlName} You are  Not Eligible for Marriage`);
  }

}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Male",27,"Malinda Gates");