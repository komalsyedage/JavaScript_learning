

//or using function 
function reversestr(arg){
    var argLen=arg.length-1;
    for (let index = argLen; index >=0; index--) {
        var char =arg.charAt(index);
        var reverse="  ";
        reverse=reverse+char;
        console.log(reverse);
    }

}
reversestr("Hard Work Always Pays Back");