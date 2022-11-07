 console.log("Given array:",[1,-7,40,502,-77,91,0,108,89,-601]);
 console.log("1==========Print array no with index===============");
 const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601]
array_numbers.forEach(function(currentvalue,index){
    console.log(index,currentvalue);
    })
   

console.log("2.=======Positive Numbers=================");
let array_numbers1=[1,-7,40,502,-77,91,0,108,89,-601]
array_numbers1.forEach((currentvalue)=>{
    if (currentvalue>=0) {
        console.log(currentvalue);
    }
})
console.log("3=======Negative Numbers==================");
let array_numbers2=[1,-7,40,502,-77,91,0,108,89,-601]
array_numbers1.forEach((currentvalue)=>{
    if (currentvalue<0) {
        console.log(currentvalue);
    }
})
console.log("4========Even Numbers==================");
let array_numbers3=[1,-7,40,502,-77,91,0,108,89,-601]
array_numbers1.forEach((currentvalue)=>{
    if (currentvalue%2==0) {
        console.log(currentvalue);
    }
})
console.log("5========addition of all  Numbers==================");
let array_numbers4=[1,-7,40,502,-77,91,0,108,89,-601]
 var sum=0;
for (let index = 0; index < array_numbers4.length; index++) {
   sum=sum+array_numbers4[index];
  
}
console.log(sum);


console.log("2.=======Even positioned numbers=================");
let array_numbers6=[1,-7,40,502,-77,91,0,108,89,-601]
array_numbers1.forEach((currentvalue,index)=>{
    if (index%2==0) {
        console.log(currentvalue);
    }
})

console.log("2.=======odd positioned numbers=================");
let array_numbers7=[1,-7,40,502,-77,91,0,108,89,-601]
array_numbers1.forEach((currentvalue,index)=>{
    if (index%2!=0) {
        console.log(currentvalue);
    }
})