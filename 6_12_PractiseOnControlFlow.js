//1.condition stmt.
let num=34;
if(num%2==0){
    console.log(" 34 is Even Number");
}
let arr=[23,54,87,55,40,21,20,66,48];
arr.forEach((n1)=>{
    if (n1%2==0) {
        console.log(`even no ${n1}`);
    }
    else{
        console.log(`not even ${n1}`);
    }
})
