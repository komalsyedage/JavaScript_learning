let map = new Map();
map.set(22,"Sitaram");
map.set(10,"Komal");
map.set(33,"Ganesh");
map.set(28,"Vitthal");
console.log("=====adding duplicate key======");
map.set(10,"Gautam")//overide and update new value
console.log(map);
console.log("=====Retrive value======");
let name=map.get(22)
console.log(name);
console.log(map.get(66));
console.log("=====Deleting Record=====");
map.delete(10)
console.log(map);
console.log("===Iskey available====");

console.log( map.has(22)); 
console.log("=====Traversing map collection   ====");
let setOfKeys = map.keys();
console.log(setOfKeys);
for (const key of setOfKeys) {
    console.log(map.get(key));
}
//from object use map and get output

class Person {
    constructor(rollNo, fullName, city, age, gender){
        this.rollNo = rollNo;
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.rollNo}  ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person(22,"Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person(33, "Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person(44, "Billgates", "USA", 67, "Male");

let mapOfPersons = new Map();
mapOfPersons.set(22, personAnil);
mapOfPersons.set(33, personAnita);
mapOfPersons.set(44, personBill);

let mapKeys = mapOfPersons.keys(); // 22   33   44
for (const key of mapKeys) {
     let personObject = mapOfPersons.get(key);
     personObject.details();

}


