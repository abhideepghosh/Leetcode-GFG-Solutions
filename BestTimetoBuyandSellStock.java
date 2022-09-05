/*
Runtime: 2 ms, faster than 93.61% of Java online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 84 MB, less than 34.66% of Java online submissions for Best Time to Buy and Sell Stock.
*/
// TC: O(n) SC: O(1)
class Solution {
    public int maxProfit(int[] prices) {
        
        // Declaring And Initialising Variables To Store Result And Minimum Value Of Prices 
        int maxProfit = 0;
        int minimumValue = Integer.MAX_VALUE;
        
        // Loop To Store Minimum Price In currentValue & Calculating Profit With Every Element Greater Than currentValue
        for(int price : prices){
            
            if(price < minimumValue){
                minimumValue = price;
            }else{
                // Calculating The Max Profit
                maxProfit = Math.max(maxProfit, (price - minimumValue));   
            }
            
        }
        
        //Returning The Final Result
        return maxProfit;
    }
}
