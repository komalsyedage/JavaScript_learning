//function Expression to get square of number

console.log("==========Using Function Expression Find Square of 4 Numbers=========");
 var square = function(value)  {
console.log(value*value);
}
square(5);
square(10);
square(20);
square(100);

//Find the Type Of Function

console.log("=============Find Type Of Function============");
var rest=function(arg1){
console.log(typeof arg1);
}
rest("Komal");
rest(12);
rest();
rest(null)



//Using Function Expression find Area of Triangle
console.log("================Using Function Expression find Area Of Triangle================")
var areaof_triangle=function(base,height){
console.log("Area Of Triangle:",base*height);
}

areaof_triangle(45,34)