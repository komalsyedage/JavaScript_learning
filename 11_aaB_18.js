

//or using function 
function reversestr(arg){
    var argLen=arg.length-1;
    for (let index = arg.length-1; index >=0; index--) {
        var char =arg.charAt(index);
        var reverse=" ";
        reverse=reverse+arg.charAt(index);
    }
console.log(reverse);
}
reversestr("Hard Work Always Pays Back");