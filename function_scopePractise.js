//for of loop in array
let f_name = function () {
  var num = [1, 23, 43, 6, 4, 50, 69];
  for (const value of num) {
    if (value % 2 == 0) {
      console.log("Even");
    } else console.log("odd");
  }
};
f_name();
console.log("=============");
//using turnary operator
var array=[29,40,4,26,37,65,46]
for (let index = 0; index < array.length; index++) {
   
    let index1=array[index]%2==0?"Even":"Odd"
    console.log(index1); 
}
//function Scope

function show(){
    var num="Komal";
    console.log(num);
}
show()
