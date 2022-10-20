
//Or using if aanother mthod

function gradeSystem(score){
    console.log("================================");
if (score<35) {
    console.log(`${score}:you are Failed`);
    
    
}
if (score>=35 ) {
    console.log(`${score}:you are Passed`);
   
}
if (score>=35 && score<60) {
    console.log(`${score}:you are Passed With GRADE is C`);
    
}
if (score>=60&&score<=75) {
    console.log(`${score}:you are Passed With GRADE  is B`);
   
}
if (score>=90 && score<=100) {
    console.log(`${score}:you are Passed With GRADE is A+`);
  
}
if (score>= 75&& score<=90) {
    console.log(`${score}:you are Passed With GRADE is A`);
  
}
if (score==" "|| score=="fourt-five"||score==null|| score==undefined||score<0|| score>100 ) {
    console.log(`${score}:Invalid Input`);
   


}
}
gradeSystem(66)
gradeSystem(13)
gradeSystem(" ")
gradeSystem(98)
gradeSystem("fourty-five")
gradeSystem(35)
gradeSystem(75)
gradeSystem(null)
gradeSystem(undefined)
gradeSystem(-20)
gradeSystem(55)
gradeSystem(82)