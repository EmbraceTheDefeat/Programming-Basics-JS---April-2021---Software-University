function calculateBookCost(args) {
let numPages = 899;
let numCovers = 2;

let pagePrintCost = parseFloat(args[0]);
let coverPrintCost = parseFloat(args[1]);
let discountPercent = Number(args[2]);
let designerFee = parseFloat(args[3]);
let teamHelpPercent = Number(args[4]);
let initialCost = (pagePrintCost * numPages) + (coverPrintCost * numCovers);
let totalCost = 0;
initialCost = initialCost * (1 - (discountPercent / 100));
totalCost = (initialCost + designerFee) * (1 - (teamHelpPercent / 100));

console.log("Avtonom should pay " + totalCost.toFixed(2) + " BGN.")
}