function nayan() {
    console.log("=========No Arguments & No Return Type==========");
    console.log("Hii All");
    console.log("How Are You ?");
}
nayan()
function name(firstName, lastname) {
    console.log("==============Concat=================");
    console.log(firstName + lastname);


}
name("Komal", "Dhone")

function swap_values(arg1, arg2) {
    console.log("============Before Swap===============");
    console.log(arg1, arg2);

    console.log("===========After Swap================");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values("Virat", "Anushka")

function swap_values(arg1, arg2) {
    console.log("===========Before Swap=============");
    console.log(arg1, arg2);
    console.log("============After swap===========");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);

}
swap_values("1000", "2000")


function add_three_numbers(arg1,arg2,arg3){
    console.log("========addition Of 3 Numbers with Return ========");
console.log(arg1,arg2,arg3);
console.log(arg1+arg2+arg3);
return arg1+arg2+arg3

}
add_three_numbers("10.23","600","40")

function add(arg1,arg2,arg3){
    console.log("============Invoke===============");
    console.log(arg1+arg2+arg3);
    

}
add("Hello","Good","Morning")