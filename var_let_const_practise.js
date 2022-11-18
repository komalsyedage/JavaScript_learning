var num=12;
console.log(num);
var num=34;
console.log(num);//Modification allow or update allow
let num1=56;
console.log(num1);
console.log(num1=86);//modification allow redecleration not allow
//let num1=new value throw error
const v1=12;
console.log(v1);
//console.log(v1=67); throw error redecleration and modification not allow
function name() {
  var ar=[1,4,6,7,,23,67] 
  console.log(ar);
}
name()
//console.log(ar); here we assign not allow it has unction scope
