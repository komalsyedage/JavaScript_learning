//spread operator
var array=["hii","geeta","follow","Insta"]
console.log(array);
console.log(...array);// ...array and only log " " output will be same
console.log("hii","geeta","follow","Insta");
//Rest parameter
function show(...a1){
console.log(a1);
}
show("hii","Sitaram","Good","Morning")//we can pass multiple arg using spread operator in function
show(2,6,3)
show("Komal","Sitaram")
//function default parameter
function play(a,b,c=8){
console.log(a+b+c);
}
play(5,7)
//object destructuring
let obj={
f_Name:"Komal",
Gradution:"BE E&TC",
State:"MH"


}
let{f_Name, Gradution,State}=obj
console.log(f_Name, Gradution,State);
//array destructuring
let arr=[2,6,3,5]
let[a,b,c,d]=arr;
console.log(a,b,c,d);
//also array destructuring by default value put e=6
//IIFE Immediately Invoke Function Expression
(function(){
console.log("hello I am In IIFE");
}())
