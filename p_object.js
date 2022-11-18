//object assign 1.clone and 2.merge
let obj={
    name:"Komal",
    Age:24,

}
let clone=Object.assign({},obj)
console.log(clone);
//merge
let obj1={
    name:"Komal",
    Age:24,

}
let obj2={
    Graduation:"BE ENTC",
    State:"Maharashtra"
}
let merge=Object.assign({},obj1,obj2)
console.log(merge);