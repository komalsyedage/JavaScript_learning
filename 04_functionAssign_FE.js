//function Expression to get square of number

console.log("===================Using Function Expression Find Square of 4 Numbers=========================");
 var square = function(value)  {
console.log(value*value);
}
square(5);
square(10);
square(20);
square(100);

//Find the Type Of Function

console.log("=============================Using FE Find Type Of Function==================================================");
var rest=function(arg1){
console.log(typeof arg1);
}
rest("Komal");
rest(12);
rest( );
rest(null)



//Using Function Expression find Area of Triangle
console.log("==========================Using Function Expression find Area Of Triangle=========================================")
var areaof_triangle=function(base,height){
console.log("Area Of Triangle:",1/2*(base*height));
}

areaof_triangle(45,34)

//Using FE find area of Rectangle
console.log("=======================Area Of Rectangle========================================================");
var areaOf_rectangle=function(length,width){
    console.log("Area Of Rectangle",length*width)
}


areaof_triangle(499,917)


//Using FE Swap Values
 var swap_values=function (arg1, arg2) {
    console.log("=====================================Using FE Before Swap===========================================");
    console.log(arg1, arg2);

    console.log("=====================================Using FE After Swap============================================");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values("Virat", "Anushka")
swap_values(1000,2000)
//Using FE find Index,chractor,last chaactor,and middle



console.log("====================using FE Find Below============================");
var value=function(){
    
var para="JavaScript the most popular language"
console.log("===========find length of string ===============");
console.log(para);
console.log(para.length);
console.log("================indexof () S b=======================");
console.log(para.indexOf("S"));
console.log("============ index of string lang ==================");
console.log(para.indexOf("lang"));
console.log("================last char of length =====================")
  console.log(para.charAt(35));
  console.log("================ 3rd last char of length =====================")
  console.log(para.charAt(33));
}
value()