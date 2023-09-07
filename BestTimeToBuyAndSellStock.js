/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowestPrice = prices[0];
    let maxProfit = 0;
    prices.forEach((currentPrice, i) => {
        if(lowestPrice > currentPrice) {
            lowestPrice = currentPrice;
        }
        else {
            maxProfit = Math.max(maxProfit, currentPrice - lowestPrice);
        }
    });
    return maxProfit;
};
