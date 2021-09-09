const dolphinsAverage = (96+108+89)/3
const koalasAverage = (88+91+110)/3

if (dolphinsAverage > koalasAverage && dolphinsAverage>=100){
    console.log('Dolphins win the trophy')
}
else if(dolphinsAverage === koalasAverage && dolphinsAverage>=100 && koalasAverage>=100){
    console.log('Its Draw')
}
else if(koalasAverage > dolphinsAverage && koalasAverage>=100){
    console.log('Koalas win the trophy')
}
else{
    console.log('No teams win the trophy')
}
