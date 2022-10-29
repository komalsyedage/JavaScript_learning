let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
arrayOfNumbers[4] = 11;//remove 
console.log(arrayOfNumbers);

console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));
//this is usedfor traversing single element
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; 
    console.log(element);
}
//traverse no. one by one for in loop is used
for (const index in arrayOfNumbers) {
    const element = arrayOfNumbers[index];
    console.log(element);
}
let totalElements = arrayOfNumbers.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}
  arrayOfNumbers.unshift(5);
  arrayOfNumbers.unshift(9,5.7,10)
console.log(arrayOfNumbers.unshift(5));
console.log("==========================");
let array=[11,22,4,81];
array.shift();
console.log(array);



console.log("============ slice() ===========");
let arrayNumbers = [1, 3, 7, 8, 9, 3, 7];
let slicedElements =  arrayNumbers.slice(2);
console.log(slicedElements);
let slicedValues = arrayNumbers.slice(1, 4);
console.log(slicedValues);


console.log("============ splice() ===========");//is used for deleting inserting new numbers
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers);
let splicedElements =  array_numbers.splice(4);//cut from 9 to last
console.log(splicedElements);
console.log(array_numbers);


console.log("============ splice() ===========");
 array_numbers = [1, 3, 7, 8, 9, 3];
console.log(array_numbers);
 // let splicedElements =  array_numbers.splice(4); // It remove elements from 4th index to the end
 // let splicedElements =  array_numbers.splice(2, 3) // It removes the total  element starting from index 2
 // console.log(splicedElements);
 // let splicedElements =  array_numbers.splice(2, 0, 22 ) // Will insert element 22 before index 2, 0 - means don't replace
 // array_numbers.splice(2, 1, 22);
 array_numbers.splice(2, 1, 22, 44, 66);
 console.log(array_numbers);

