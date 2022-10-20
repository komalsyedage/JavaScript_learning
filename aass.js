function gradeSystem(score) {

    console.log("=========================");
    if (score<35)
     {
        console.log("You are Failed");
    }
if (score>=35 ) 
{
        console.log("You are Passed");
    }
if (score>=35&&score<=60 ) 
{
        console.log("Passed and GRADE Is C");
    }
 if (score>=60 && score<75) 
 {
        console.log("Passed and GRADE Is B");
    }
if (score>=75 &&score<=90)
 {
        console.log("Passed and GRADE Is A");

    }
if (score>=90 && score<=100) 
{
        console.log("Passed and GRADE Is A+");

    }
if ( score==" "|| score=="fourty-five"||score==null|| score==undefined||score==-20|| score>100 )
 {
        console.log("Invalid Input");

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

