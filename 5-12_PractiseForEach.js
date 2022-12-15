const value=[20,54,26,65,23,98,54,23,54]
value.forEach((currentvalue,index)=>{
if (index%2==0) {
    console.log(currentvalue);
}

})
const valu1=new Set(value);
valu1.forEach((currentvalue)=>{
console.log(currentvalue);
})