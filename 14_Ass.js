//see in video and ass and  seehow it is
const array_nums=[20,3,4,56,90,400,49];

console.log("Given Array=========>",array_nums);

const  array2=[55,56];

console.log("shallow clone Array==========>",...array_nums,...array2);
const array3=[10,25];
console.log("After deep clone==============>",...array_nums,...array2,...array3);
const array_even=[2,30,14,8]
console.log("Merge array with above======>",...array_nums,...array_even);

//Q4 sir given one snip 
const employee_info={
    emp_id:2,
    emp_name:"John Doe",
    salary:{
        july_mnth:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    }
    ,
    address:{
        locality:{
            colony:"OM VrindavanSociety",
            street:"Kanch Pokli, 413202",

        },
        city:"Mumbai",
        state:"Maharashtra",
        street:"India",

    },
    mobiles:["+91 8600 88","1800 4567 32","+91- 9096 5678 77"]
}
console.log("Address==>",employee_info.address.locality);
console.log("City======>",employee_info.address.city);
console.log("State======>",employee_info.address.state)
console.log("Country======>",employee_info.address.country)
console.log("Mobile No.=====>",employee_info.mobiles)

 employee_info.  address.locality.street="california";
console.log(employee_info.address.locality.street);
