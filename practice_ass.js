//function call back
function do_homework(callback) {
console.log("Hii i am doing homework");

callback();
}
function copy_homework(){
console.log( "w8 i will copy my friend");
console.log("thanks for that!!!");
}
do_homework(copy_homework);


//settimeout
//settimeout(function,interval)
setTimeout(Set,1000)
function Set(){
    console.log("Hii Dude");
}
//function is call first class citizen
//1.function can be store in variable
console.log("Function As variable");
function variable(){
console.log("HII Function I am Variable Also......");
}
let show=variable;
show();
//2.Function can passanother function
function f_name(){
console.log("hi I am copy in s_name function");
}
function s_name(call){
console.log("I am copy to you");
call();

}
s_name(f_name)
//3.function can return another function
function k_name(){
    console.log("Hii i am return You");
    return function s_name(){
        console.log("I am always with you");
    }
}k_name()();
//Es future
//1.spread operator
function num(...arg) {
    console.log(arg);
}
num("Hii" ,"Good","Morning")
num(2,4,"hii jenii")

//var variable
var name="komal";
console.log(name);
var name="sitaram";
console.log(name);
//let variable
let mine="sitaram";
console.log(mine);
mine="komal"
console.log(mine);
//second same name let not allowed
//const
const moon="bnbn";
console.log(moon);