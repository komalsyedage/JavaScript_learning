class Person {
    constructor(fullName, city, age, gender){
      this.fullName = fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person("Anil Mohite", "Pune", 31, "Male");//creating new object 
let personAnita= new Person("Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person("Billgates", "USA", 67, "Male");

const array = [ personAnil, personAnita, personBill];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element.age>=50) {
        console.log(` ${element.fullName}  ${element.city}  ${element.age} ${element.gender}  `);
    }
}


const arrayNumbers = [3, 4, 56, 77, 88];
for (const element of arrayNumbers) {
    console.log(element);
}

//Easy (for of loop) instead (for loop)
for (const person of array) {
    if(person.age>=50) {
          console.log(`${person.fullName}  ${person.city}  ${person.age} ${person.gender} `);
    }
}
console.log("Practise ");
//date=16/11
//merge two array
let arry1=["Komal","Ganesh","Rahul","Rupali","Sitaram"]
let arr1=["Vijay","Baba","Akshay","Vinu"]
arr2=[...arry1,...arr1]
console.log(arr2);
console.log(arr1.concat(arry1));

let n=["Komal","sitaram","Yedage"]
console.log(...n);