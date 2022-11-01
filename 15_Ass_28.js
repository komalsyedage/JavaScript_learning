 const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];

console.log("1.=======first and Last element Of Array=======>>");
console.log(fruits_seasonal.shift(),fruits_seasonal.pop());
console.log("2.=======Add Papaya before Banana==============>>")
const fruits_seasonal1=["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal1.unshift("Papaya")
console.log(fruits_seasonal1);
console.log("3.==========Remove Mango From Array============>>");
const fruits_seasonal2=["Banana","Orange","Apple","Mango","Water Melon"];
delete fruits_seasonal2[3];
console.log(fruits_seasonal2);
console.log("4.=========Add Pineapple to Last Positin=========>>");
let fruits_seasona3=["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasona3.push("Pineapple")
console.log(fruits_seasona3);
console.log("5.======Insert Dragon Fruit before Water melon====>>");
let fruits_seasonal4=["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal4.splice(4,0,"Dragon Fruit")
console.log( fruits_seasonal4);
console.log("6.======Replace Orange with Kiwi===================>>");
let fruits_seasonal5=["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal5.splice(1,1,"Kiwi")
console.log(fruits_seasonal5);
console.log("7.====Log Elements starting FromPositin 1 to 4========>>");
let fruits_seasonal6=["Banana","Orange","Apple","Mango","Water Melon"];
fruits_seasonal6.splice(0,1);
console.log(fruits_seasonal6);
 console.log("8.======Last 3 elements=====================>>");
let  fruits_seasonal7=["Banana","Orange","Apple","Mango","Water Melon"];
 fruits_seasonal7.splice(0,2);
 console.log( fruits_seasonal7);
 //oR Do I 
var fruits_seasonal8=["Banana","Orange","Apple","Mango","Water Melon"]
for (let index = 0; index < array.length; index++) {
    const element = fruits_seasonal8.includes()
}

