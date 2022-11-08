const array_numbers=[10,-20,30,40,-50,10];
array_numbers.forEach(function(currentvalue,index,array){  //index or array nahi write kel tar chalty
  console.log(currentvalue,index,array);
})

//or
array_numbers.forEach(function(currentvalue){
console.log(currentvalue);
})

array_numbers.forEach((currentvalue,index)=>{
    console.log(currentvalue,index);
})

array_numbers.forEach((currentvalue,index)=>
{
    if (currentvalue<0) {
        
    }console.log(currentvalue,index);
})
console.log("====Traversing set using for each===");



