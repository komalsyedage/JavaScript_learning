var display=(a1,a2) =>{//here a2=12 any valuecannot put
if (a1="Komal") {
    console.log(`${a1} ${a2}`);
}
}
display("Komal","Sitaram")

let shoe=()=>{
console.log("Good Morning Today Is Friday");
}//here we cannot add shoe() show error
shoe()

let show=(a,d,b=2)=>{//default value
console.log(a*d*b);
}
show(5,5,2)
show(10,4)

let num=(a,s,d,f,g)=>{
console.log(a+s+d+f+g);
}
num(100,100,200,349,756)
num("I am","Learning","ES6","Future","In Depth")