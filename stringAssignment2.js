var string=function(){
    console.log("============================Given string Using FE on console==========================");
    var string="  Hey You are doing good, keep it up  ";
console.log(string);
console.log("=================================Length of string=====================================");
console.log(string.length);
console.log("=================================Remove extra spaces==================================");
console.log(string.trim());
console.log("==================================print removed and count extra spces=================");

var trimResult =string.trim();
console.log(trimResult.length);
console.log("==================================first and last charactor ===========================");


console.log(string.substring(2,3));
console.log(string.substring(34,35));
//or
//console.log(string.charAt(2));
//console.log(string.charAt(34));
console.log("====================================total words instring========================================")

}
string();
//using FE and withut function argument and no return type

var  string=function() {
    var string="Hey You are doing good, keep it up";
    console.log("====================================total words in string========================================")
    var stepSplit = string.split(" ");
    console.log(stepSplit);
    console.log(stepSplit.length);
    console.log("====================================indes() of good word from  list========================================")
   
    console.log(string.indexOf("good"));
    console.log("==================================substring() and slice()===========================================")
    console.log(string.substring(22));
    console.log(string.slice(22));
    console.log("====================================check string end with up==================================================")
    console.log(string.endsWith("up"));
    console.log("=====================================check string start with hey==========================================")
    console.log(string.startsWith("Hey"));
}
string()
