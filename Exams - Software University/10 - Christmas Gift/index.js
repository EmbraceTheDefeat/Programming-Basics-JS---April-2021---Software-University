function solve91 (inputs){
    let index = 0;
    let numOfAdults = 0;
    let numofKids = 0;
    let moneyForToys = 0;
    let moneyForSweaters = 0;
  while (inputs[index] != "Christmas"){
   const age = inputs[index]
   if(age > 16){
     numOfAdults ++
   }
   else if (age <= 16){
     numofKids ++
   }
    index++
  }
  let toys = numofKids * 5;
  let sweaters = numOfAdults * 15;
  console.log(`Number of adults: ${numOfAdults}`);
  console.log(`Number of kids: ${numofKids}`);
  console.log(`Money for toys: ${toys}`);
  console.log(`Money for sweaters: ${sweaters}`);
  }