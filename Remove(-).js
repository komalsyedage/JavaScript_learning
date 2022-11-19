function tran(argument){
var array=argument.split('')
for (let index = 0; index < array.length; index++) {
   if (array[index]=="-") {
    array.splice(index,1);
    array[index]=array[index].toUpperCase();
   }
    
}
console.log(array.join(''));
}
tran("komal-sitaram-yedage")