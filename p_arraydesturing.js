let student=["Rohan","Mohan","Radha","Sanju","Namita","Namrata"]
let [student1,student2,student3]=student;
console.log([student1,student2,student3]);

// for loop
let studenty=["Rohan","Mohan","Radha","Sanju","Namita","Namrata"];
studenty.forEach(element => {
    console.log(element);
});
//same output
for (const iterator of studenty) {
    console.log(iterator);
    

}

// for each for set
let set=new Set();
set.add(10);
set.add(70);
set.add("Komal");
set.add("sitaram");
set.delete(70)
console.log(set);
set.forEach((currentvalue)=>{
    if (currentvalue=="Komal" ) {
        console.log(currentvalue+" sitaram");
    }else if (currentvalue=="sitaram") {
        console.log(currentvalue+" komal");
    }

})
console.log("=============>>");
