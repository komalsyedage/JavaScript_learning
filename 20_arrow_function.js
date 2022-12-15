function display(){
    console.log("Hello");
}
let show=() =>{
    console.log("Hello");
}
show();// without argument



//with argument FE
let add = function(n1, n2) {
    return n1 + n2;
}
console.log( add(10, 20));

let sum = (n1, n2) =>  n1 + n2; 

// let sum1 = (n1, n2) => {
//     return n1 + n2
// } 

console.log( sum(10, 20));
//arrow function
let show1=(a,b)=>{
console.log(b/a);
}
show1(10,50);

var nmn=(b,d)=>{
return b/d;
}
console.log(nmn(40,20)); 

let that=(n,m,d)=>{
console.log(n+m+d);
}
that(2,4,7)


