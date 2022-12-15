let globalvar="I Am Global Var";
function show(){
    let outerfun="I Am In Outer Function"
    function inner(){
let innerfun="I Am Inner Variable";
console.log(`Global :${globalvar}`);
console.log(`outer Function:${outerfun}`);
console.log(`Inner Function:${innerfun}`);
    }
    inner();
}
show()
