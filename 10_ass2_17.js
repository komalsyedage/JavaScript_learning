var reverseString=function(){
 var reverseString= "Hard work always pay back"
var len_str=reverseString.length-1;
var reverseStr="";
for (let index = len_str; index >=0; index--) {
    console.log(reverseString.charAt(index));
    reverseStr=reverseStr + reverseString.charAt(index)
    console.log(reverseStr);
    
}
}
reverseString()


