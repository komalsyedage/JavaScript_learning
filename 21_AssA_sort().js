const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log("Given Array=[113,45,56,11,32,45,109,799,56,45]");
console.log("1.Reverse The Array===============================>");
array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log("2.use Sort() without passing argument==============>");
array_roll_numbers.sort()
console.log( array_roll_numbers);
console.log(".Issue is==>when we sort() Array without argument output is only compair first digit and show array ");
console.log("3.Sort Array In Assending Order=======================> ");
array_roll_numbers.sort((a,b)=>{
return a>b?1:-1;
});
console.log(array_roll_numbers);
console.log("4.Sort Array In desending Order======================>");
array_roll_numbers.sort((a,b)=>{
return a>b?-1:1;
})
console.log(array_roll_numbers);
console.log("5.sort() array in descending order using reverse()===>");
 array_roll_numbers.sort()
 console.log(array_roll_numbers);
 array_roll_numbers.reverse()
 console.log(array_roll_numbers);
 console.log("6.Find Greatest no.from Array========================>");
 console.log(Math.max(113,45,56,11,32,45,109,799,56,45));
 console.log("7.Find smallest no.from Array========================>");
 console.log(Math.min(113,45,56,11,32,45,109,799,56,45));
console.log("8.Remove duplicate element from Array");
let arrayUniqueElement=[...new Set(array_roll_numbers)];
console.log(arrayUniqueElement);