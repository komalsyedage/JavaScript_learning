const teacher={
    FullName:"Manisha Chaudhari",
    Age:30,
    Education:"Bachelor of Arts",
    "IsMarried":"yes",
    degrees:{
        Engineerig:"E&TC",
        Doctor:"M.D",
        PHD:"Adv Computing",
        BA:"English Lecturer",
        MS:"Science Lecturer",  
  
    },
    Certificate:{
      certificate1:"Hacker Rank Participation",
      certificate2:"IFE Course",
      certificate3:"Adv Pgrogramming",
    },
    
    value:function () {
     let personDetails=`Teacher Degrees are Total degrees are:${Engineerig},${Doctor},${PHD},${BA},${MS}`
       return personDetails
      },


}



console.log(teacher);

teacher.FullName="Manisha Ramesh chaudhari";
console.log(teacher.FullName);

console.log("contents write in function with Return:");
console.log(teacher.degrees);
console.table(teacher.degrees);
console.log(teacher. Certificate);

console.log("After Deleting One certificate:");
delete teacher.Certificate.certificate1;
console.table(teacher.Certificate);
console.log("After Adding New Property in certificate:");
teacher.Certificate.certificate3="Me First Rank"
console.table(teacher.Certificate);
