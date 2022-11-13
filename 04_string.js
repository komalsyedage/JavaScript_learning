var greet = "Good Morning";

console.log(greet);

var count = greet.length;
console.log(count);
//or write 
console.log(greet.length);

var sonali = greet.charAt(8);
console.log(sonali);
//Or
console.log(greet.charAt(8));

//space contact

var fName = "Virat";
var lName = "Kohli";
var result = fName.concat(lName); // ViratKohli
console.log(result);



console.log("==============replace()===============");
console.log("Good Morning bro and sis");
var greet = "Good Morning bro and sis";
var replaceDemo = greet.replace("Morning", "Evening");//replace morning to evening
console.log(replaceDemo);


console.log("==============toUpperCase() and toLowerCase()===============");
console.log(replaceDemo.toUpperCase());
console.log(replaceDemo.toLowerCase());

//trim count all word letter with spaces
console.log("==============trim()===============");
var greet = "    Good Morning bro and sis   ";
console.log(greet.length);
var trimResult = greet.trim();
console.log(trimResult.length);





console.log("==============includes()===============");
var greet = "Good Morning bro and sis";
console.log(greet.includes("bro"));
console.log(greet.includes("Home"));


console.log("==============substring()===============");//substring and slice do same work 
var greet = "Good Morning bro and sis";
console.log(greet.substring(8));
console.log(greet.substring(13, 17));

console.log("==============slice()===============");
console.log(greet.slice(8));
console.log(greet.slice(13, 17));

console.log("==============split()===============");
var studentList = "Sunil | Anil| Andy| Jenny| Lata";
var splitResult = studentList.split("| ");
console.log(splitResult);

var impQuote = `"Do or Die" this attitude is important for this training`;
console.warn(impQuote);

var fName = "Virat";
var lName = "Kohli";

// First Name:${fName}  Last Name: ${lName} 
console.log(`First Name : ${fName} and Last Name: ${lName}`);
console.log(`${fName}${lName}`);

var res = "Hey you are doing good keep it up";
var stepSplit = res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);

