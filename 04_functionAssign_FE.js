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
rest();
rest(null)



//Using Function Expression find Area of Triangle
console.log("==========================Using Function Expression find Area Of Triangle=========================================")
var areaof_triangle=function(base,height){
console.log("Area Of Triangle:",base*height);
}

areaof_triangle(45,34)

//Using FE find area of Rectangle
console.log("=======================Area Of Rectangle========================================================");
var areaOf_rectangle=function(length,width){
    console.log("Area Of Rectangle",length,width)
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
console.log("=============================Using FE Find Position===================================== "); 
var string=function(Values){
   var count= string.length;
   console.log(count);
  
  ///some dout here ass no 10 oct Q.6-b
   
}
string("JavaScript Is Most Popular Language")
