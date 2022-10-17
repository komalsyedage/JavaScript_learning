//imp* assignment
console.log("Q1.================>");
var arg1="Good Morning IT Champ";
console.log("string:",arg1);
for (let index = 0; index < arg1.length; index++) {
    var arg2=arg1.charAt(index)
if (arg2=="a"||arg2=="e"||arg2=="i"||arg2=="o"||arg2=="u") {
    console.log(arg2);
}
}

console.log("Q2.================>");
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

console.log("Q3.==================>");// write function expression
var rest=function(){
    var total=0; 

for(var i=1;i<=10;i++){
   
      total+=i;
    console.log(total);
}
    
}
   rest();
   console.log("Q4.===================>");//use FE
   var function_add=function(){
var sum=0;
    var number=5;
for (let index= 1; index<=number; index++) {
   sum+=index*index;
   console.log(sum);

    
}
   }
function_add()
console.log("Q5=====================>");


