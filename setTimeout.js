// Dnyanesh sirs example
for (let index = 0; index < 5; index++) {
setTimeout(function(){
    console.log(index);
},
index*1000);
}

for (var index = 0; index < 5; index++) {
    setTimeout(function(){
        console.log(index);
    },
    index*1000);
}