function show(argument){
    if(argument%4===0 && argument!==null){
        console.log(`${argument} is a leap year`);
    }else if(argument%400==0 && argument!==null){
        console.log(`${argument} is a leap year`);
    }
    else if(argument%100!==0){
        console.log(`${argument} is not a leap year`);
    }
    else{
        console.log(`${argument} is not a leap year`);
    }
}
show(2020)
show(1999)
show(1600)
show(2022)
show(1945)
show("Twenty Twenty")
show(undefined)
show(NaN)
show(1750)
show(null)