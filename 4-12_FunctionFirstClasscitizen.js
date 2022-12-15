//1.Fun can stor in Vriable
//2.fun can return another fun
//3.fun can pass argument to another fun

function display(){
    console.log("Fun can store in variable");
}
let num=display;
num()
function show(){
    console.log("Hii I Am Komal");
    return function show2(){
        console.log("Learning Angular");
    }
}
show()();

function desiign(){
console.log("I am learning Angular");
}
function desiign1(show){
console.log("Hii Dude");
show();
}
desiign1(desiign)