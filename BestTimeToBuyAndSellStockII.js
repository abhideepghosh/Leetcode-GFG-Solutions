/**
 * @param {number[]} prices
 * @return {number}
 */
// TC: O(N) SC: O(1)
var maxProfit = function(prices) {
    let profit = 0; // Initialize total profit to zero

    // Loop through prices starting from the second day
    for (let i = 1; i < prices.length; i++) {
        
        // If today's price is higher than yesterday's, we can make a profit
        if (prices[i] > prices[i - 1]) {
            
            // Add the profit from buying yesterday and selling today
            profit += prices[i] - prices[i - 1];
        }
    }

    // Return the accumulated profit
    return profit;
};
