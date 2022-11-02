var arrayOfNumbers=["Kamat","Memon","Nashpati","Taimur","Menon","Kamat","Andy","Taimur"]
console.log("Given Array======>>",arrayOfNumbers);
let duplicateArray=[...new Set( arrayOfNumbers)];
console.log("After Remove Duplicate Elements:===>>",duplicateArray);
console.log("Count Of Duplicate Element:======>>",arrayOfNumbers.length-(duplicateArray.length));
console.log("Count Of Unique Element:====>>",duplicateArray.length);