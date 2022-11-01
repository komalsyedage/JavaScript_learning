//write program using inncludes sring vowels
console.log("Q1=======================================>=");
//solve from sir
// Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function(myString) {
    console.log("Count the total number vowels using includes() for string → “Good Morning IT Champ”");
    //var myString = "Good Morning IT Champ";
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount=0;
    for (let index = 0; index < myString.length; index++) {
       var char =  myString.charAt(index);
       var isLowerAvailable =  vowelsLoweCase.includes(char);
       var isUpperAvailable =  vowelUpperCase.includes(char);
       if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
       }
    }
    console.log(`Total Vowels count : ${vowelsCount}`);
}
countVowels("Good Morning IT Champ");


console.log("Q2.==================================================>");
function value(){
var string="I Love JavaScript"
for (let index = 0; index < string.length; index++) {
    var char1=string.charAt(index);
   if (char1=="a"||char1=="e"||char1=="i"||char1=="o"||char1=="u") {
    console.log(char1);
    
   }    
}
}
value()


console.log("Q3.========================================>");// write function expression
var rest=function(){
    var total=0; 

for(var i=1;i<=10;i++){
   
      total+=i;
    console.log(total);
}
    
}
   rest();



   console.log("Q4.=========================================>");//use FE
   var function_add=function(){
var sum=0;
    var number=5;
for (let index= 1; index<=number; index++) {
   sum+=index*index;
   console.log(sum);

    
}
   }
function_add()


console.log("Q5==================================>");
function evenpositioned(){

}
evenpositioned()



console.log("============================");
function evenPositionedChars(myString){
    for (let index = 0; index < myString.length; index++) {
       // console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2!=0 && chh!=" ") {
          console.log(chh);
       }
       //var chh = myString.charAt(index);
        
    }
}
evenPositionedChars("Hard work always pays back");
evenPositionedChars("soon I Will be Angular It Champ ");
