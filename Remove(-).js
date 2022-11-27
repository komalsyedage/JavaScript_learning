function tran(argument){
var array=argument.split('')
for (let index = 0; index < array.length; index++) {
   if (array[index]=="-") {
    array.splice(index,1);
    array[index]=array[index].toUpperCase();
   }
    
}
console.log(array.join(''));
}
tran("komal-sitaram-yedage")


console.log("input is Hii--Bro-Good-Morning");
let display=function(argument){
 var arr= argument.split('')
for (let index = 0; index < argument.length; index++) {
   if (arr[index]=="-") {
      arr.splice(index,1);
      
   }
  
}

console.log(arr.join(''));

}
 display("Hii-Bro-Good-Morning")
 