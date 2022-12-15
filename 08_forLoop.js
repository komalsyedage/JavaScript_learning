for (var test = 1; test <= 10; test++) { // test = 1  2  3
    console.log(test); // 1 2  3
}
// 0 2 4 6 8 10
for (let index = 0; index <= 10; index=index+2) { // index++   index = index+2
    console.log(index);
}


// initialization: 1  condition <=10   update by 1;    
for (var test = 1; test <= 10; test++) { // test = 1  2  3
     console.log(test); // 1 2  3
}
// 0 2 4 6 8 10
for (let index = 0; index <= 10; index=index+2) { // index++   index = index+2
    // console.log(index);
}

// WAP to print numbers from 50 to 40 by decrementing by 1
for (let index = 50; index > 40; index--) { // 51  52  53 
    // console.log(index); // 50  51 52 
    
}


// WAP to find first 15 odd numbers
// intialization index=1 ; condition index<30;  update index= index+2 

for (let index = 1; index < 30; index=index+2) {
    //console.log(index);
    
}


for (let index = 1; index < 30; index++) {
    if(index%2!=0){
        console.log(index);
    }
    
}

//WAP to find first 15 odd numbers


//WAP to find first 43 even numbers
var countEven = 0; // 2
for (let index = 0; index < 1000; index++) { // 1  2
    if(index%2==0){
        console.log(index); // 0  2 
        countEven = countEven +1;
        if (countEven==43) {
            break;
        }
    }
    
}

console.log("=====Even no bet 50 to 100 first 10=");
var stop=0;
for (let index = 50; index < 150; index++) {
   if (index%2==0) {
    console.log(index);
   
    var stop=stop+1;
     if (stop==10) {
      break;
     }
   }
  
    
}
console.log("==========odd no bet 20 to 100==first 10===");
var stop=0;
for (let index = 20; index < 100; index++) {
   if (index%2!=0) {
    console.log(index);
   
    var stop=stop+1;
     if (stop==10) {
      break;
     }
   }
  
    
}
console.table();
console.log("=====");
array=[1,2,3,4]
array.forEach(element => {
    console.log(element);
});

if (array.length<=3) {
    console.log("true");
} else {
 console.log("false");  
}
var key=3
//switch case
switch (4) {
    case 1:console.log("hiii");
        
        break;

    default:console.log("noooi am in default");
        break;
}
//traverse array
 var array="hii Good Morning All Angular Developer"
for (const key in array) {
    if (Object.hasOwnProperty.call(array, key)) {
        const element = array[key]
        console.log(element);
    }
}
//even number
for (let index = 0; index < 20; index=index+2) {
   
    console.log(index);
}
//while loop
