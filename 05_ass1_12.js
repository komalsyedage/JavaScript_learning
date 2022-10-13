console.log(" Given words are:JavaScript,Google,Developer");
var wordLengthSquare=function(word){
console.log(word.length);

}
console.log("Q.1.1**************Length Of Word*************");
wordLengthSquare("JavaScript");
wordLengthSquare("Google");
wordLengthSquare("Developer");

console.log("Q1.2************Length of word Square**********");
var wordLengthSquare=function(word){
var wordlength=word.length
return wordlength*wordlength
}
 console.log(wordLengthSquare("JavaScript")); 
 console.log(wordLengthSquare("Google"));
  console.log(wordLengthSquare("Developer"));



console.log("Q2**************************************");
console.log(" string:I Am Angular Developer");
  var givenstringLength=function(){

var givenstringLength="I Am Angular Developer".length;
var result="I Am Angular Developer".split(" ")

console.log(givenstringLength);
console.log(result);
console.log("word in string===========>" , result.length);
console.log( "word length divide by total word in string====>"  , givenstringLength/result.length);
console.log("string length multiply by total word===>",givenstringLength*result.length);
  }
  givenstringLength()