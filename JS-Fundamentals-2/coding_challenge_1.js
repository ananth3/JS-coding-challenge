const calcAverage = (a,b,c)=> a+b+c/3;
const dolphinsAvg = calcAverage(44,23,71);
const koalasAvg = calcAverage(65,54,49);

const checkWinner = function(dolphinsAvg,koalasAvg){
    if (dolphinsAvg >= 2 * koalasAvg){
        console.log(`Dolphins win trophy (${dolphinsAvg} vs. ${koalasAvg})`);
    }
    else if(koalasAvg >= 2 * dolphinsAvg){
        console.log(`koalas win trophy (${koalasAvg} vs. ${dolphinsAvg})`);
    }
    else{
        console.log('No team wins');
    }
}
checkWinner(dolphinsAvg, koalasAvg);
