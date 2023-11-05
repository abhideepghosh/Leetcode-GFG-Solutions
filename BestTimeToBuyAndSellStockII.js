/**
 * @param {number[]} prices
 * @return {number}
 */
// TC: O(N) SC: O(1)
var maxProfit = function(prices) {
    let profit = 0;
    for(let i=1; i<prices.length; i++) {
        if(prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
    }
    return profit;
};
