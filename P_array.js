let arr=[43,28,49,52,39,66,90,72]
for (let index = 0; index < arr.length; index++) {
   if (arr[index]%2==0) {
    console.log(arr[index]);
   }
    
}
console.log("========OR===========");
let num=[99,23,30,66,27,6,5,12,121]
for (let index = 0; index < num.length; index++) {
    const element = num[index];
    console.log(element);
    
}
console.log("no. divisible by 3");
let num1=[99,23,30,66,27,6,5,12,121]
num1.forEach(function(value,index){
    if (value%3==0) {
        console.log(value,index);
    }
}) 
   

num1.map(function(value,index){
console.log(value);
})
console.log("slice method");
let numr=[99,23,30,66,27,6,5,12,121]
numr.splice(2,3,77,80);
console.log(numr);