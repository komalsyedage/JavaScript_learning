// var array=["Komal",21,"123","Sitaram",64,0,2,64]
// console.log(array);
var array=new Array("Komal",21,"123","Sitaram",64,0,2,64)
console.log(array);
var n=new Array("Komal",21,"123","Sitaram",64,0,2,64)// in sir notes syntax of array []from new is wrong
console.log(n);
//accesing array element
console.log( arr=array[0],arr=array[3]);
console.log(array[0]="Sitaram");
console.log(array[3]="Komal");
console.log( array);
console.log(array.indexOf(64));//values position
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
console.log("travrse array in reverse order=========");
let array2=[1,"k","s","0",0,"w",1]
for (let index = array2.length-1; index >=0 ; index--) {
 console.log(array2[index]);
}
console.log("even position===========");
const array1=["ks","123",77,00,77,"ks","123"]
console.log(array1);
for (let index = 0; index < array.length; index++) {
  var name= index%2==0
 console.log(name);
}
console.log("push, pop ,slice ,splice,shift,unshift");
var arr=[2,"er","ks",34,"wt"]
console.log(arr);
arr.push(2)//add at last
console.log(arr);
console.log(arr.pop());// delete at last
console.log(arr);
console.log("slice and splice");
console.log(arr.slice());
console.log(arr.slice(1,5));
console.log(arr.slice(2,3));//slice method can not take 3rd element we declare here
const arry=["ka","kk","ik","sk","gd"]
console.log("splice====");
arry.splice(2,1,"s","k")
console.log(arry);
