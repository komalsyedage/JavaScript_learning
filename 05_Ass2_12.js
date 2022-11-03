console.log("Q1********************");
var number=function( value1,value2){
   
   
    var result=value1>value2?value1:value2;
    console.log(result);
   
}
console.log("greator No Among 10,-10===========>");
number(10,-10);
console.log("greator No Among 800,899===========>");
number(800,899);

console.log("Q2.Even or odd numbers*******************");
console.log("values 29,44,0,101");
var value=function(value1){
var result=value1%2==0?"Even":"Odd";

console.log(result);
}
value(29);
value(44);
value(0);
value(101);

console.log("Q3.*********************");
var string=function(arg1){
var value="javascript";
console.log("javascript word length========>",value.length);
var result=value.length%2==0?"Even":"Odd";



console.log(result);
}
string("javascript");




var string=function(arg1){
    var value="developer";
    console.log("developer word length=========>",value.length);
    var result=value.length%2==0?"Even":"Odd";
    
    console.log( result);
    }
string("developer");


var string=function(arg1){
    var value="Google";
    console.log("Google word length=========>",value.length);
    var result=value.length %2==0?"Even":"Odd";
    
    console.log( result);
    }
string("Google");

//or use these
function word(w1){
var check=w1.length;
console.log("Number of words:",w1.length);
console.log(check%2==0?"EVEN":"ODD");
}
word("Javascript")
word("Google")
word("Developer")