var text = "Apple, Banana, Kiwi";
var part = text.slice(7);
console.log(part);
//Same output
var text = "Apple, Banana, Kiwi";
var part = text.slice(-12);
console.log(part);
let text1 = "Apple, Banana, Kiwi";
let part1 = text.slice(-12, -6);
console.log(part1);// from reverse we got banana and -6 
let str = "Apple, Banana, Kiwi";
let part2 = str.substring(7, 13);//same output ==>substr()=slice()
console.log(part2);
let strr = "Apple, Banana, Kiwi";
let partt = str.substr(-4);
console.log(partt);

let text2 = "Please visit Microsoft!";
let newText = text2.replace(/MICROSOFT!/i, "W3Schools");
console.log(newText);

var text4 = "Hello World!";
let text3 = text4.toUpperCase();
console.log(text3);

let text5 = "5";
let padded = text5.padStart(5,"x");
console.log(padded);

let text6 = "5";
let padded1 = text6.padEnd(5,"0");
console.log(padded1);

let texth = "HELLO WORLD";
let char1 = texth.charAt(0);
console.log(char1);
//same output
let textl = "HELLO WORLD";
let char = textl[0];
console.log(char);