function exam(input) {
    let sweetcakes = input[0]
    let amountOfOrderedCakes = Number(input[1])
    let dayOfMonth = Number(input[2])
 
    if (dayOfMonth <= 15) {
        if (sweetcakes === 'Cake') {
            let priceForOneCake = 24
            let priceForAllOrderedCakes = amountOfOrderedCakes * priceForOneCake
            if (dayOfMonth <= 22) {
 
 
                if (100 >= priceForAllOrderedCakes && 200 < priceForAllOrderedCakes) {
                    let discount = 0.15 * priceForAllOrderedCakes
                    let finalPriceAfterDiscount = (priceForAllOrderedCakes - discount).toFixed(2)
                    console.log(finalPriceAfterDiscount)
                }
                if (200 < priceForAllOrderedCakes) {
                    let discount = 0.25 * priceForAllOrderedCakes
                    let finalPriceAfterDiscount = priceForAllOrderedCakes - discount
                    if (dayOfMonth <= 15) {
                        let additionaldisc = 0.1 * finalPriceAfterDiscount
                        let finalPriceAfterAlldisc = (finalPriceAfterDiscount - additionaldisc).toFixed(2)
                        console.log(finalPriceAfterAlldisc)
 
 
 
 
                    }
                }
            }
            } else if (sweetcakes === 'Souffle') {
                let priceForOneSouffle = 6.66
                let priceForAllOrderedSouffles = amountOfOrderedCakes * priceForOneSouffle
                if(dayOfMonth <= 22) {
                if (100 >= priceForAllOrderedSouffles && 200 < priceForAllOrderedSouffles) {
                    let discount = 0.15 * priceForAllOrderedSouffles
                    let finalPriceAfterDiscount = (priceForAllOrderedSouffles - discount).toFixed(2)
                    console.log(finalPriceAfterDiscount)
                }
                if (200 < priceForAllOrderedSouffles) {
                    let discount = 0.25 * priceForAllOrderedSouffles
                    let finalpriceAfterDisc = (priceForAllOrderedSouffles - discount).toFixed(2)
                    console.log(finalpriceAfterDisc)
                    if (dayOfMonth <= 15) {
                        let additionaldisc = 0.1 * finalpriceAfterDisc
                        let finalPriceAfterAllDiscount = (finalpriceAfterDisc - additionaldisc).toFixed(2)
                        console.log(finalPriceAfterAllDiscount)
 
                    }
                }
            } 
        }else if (sweetcakes === 'Baklava') {
                let priceForOneBaklava = 12.60
                let priceForAllOrderedBaklava = amountOfOrderedCakes * priceForOneBaklava
                if(dayOfMonth <= 22){
 
                if (100 >= priceForAllOrderedBaklava && 200 < priceForAllOrderedBaklava) {
                    let discount = 0.15 * priceForAllOrderedBaklava
                    let finalPriceAfterDiscount = (priceForAllOrderedBaklava - discount).toFixed(2)
                    console.log(finalPriceAfterDiscount)
                }
                if (200 < priceForAllOrderedBaklava) {
                    let discount = 0.25 * priceForAllOrderedBaklava
                    let finalPriceAfterDiscount = priceForAllOrderedBaklava - discount
                    if (dayOfMonth <= 15) {
                        let additionaldisc = 0.1 * finalPriceAfterDiscount
                        let finalPriceAfterAlldisc = (finalPriceAfterDiscount - additionaldisc).toFixed(2)
                        console.log(finalPriceAfterAlldisc)
 
 
 
 
                    }
                }
            }
 
 
        }
        }
    }