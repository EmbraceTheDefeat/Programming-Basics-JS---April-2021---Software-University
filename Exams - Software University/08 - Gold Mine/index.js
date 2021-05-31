function solve(inputs) {
const locations = Number(inputs.shift());
for(let i=0; i<locations; i++) {
    let avgGold = Number(inputs.shift())
    let days = Number(inputs.shift())
    let amountExtractedGold = 0;
    for(let n=0; n<days; n++) {
        let extraction = Number(inputs.shift())
        amountExtractedGold += extraction;
    }
    let average = amountExtractedGold / days;
    if(average >= avgGold) {
        console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`)
    } else if (average < avgGold) {
        console.log(`You need ${(avgGold - average).toFixed(2)} gold.`)
    }
}
}