class Solution {
    public int maxProfit(int[] prices) {
        
        int maxProfit = 0;
        int minimumSellPrice = Integer.MAX_VALUE;
        
        for(int price : prices){
            if(minimumSellPrice > price){
                minimumSellPrice = price;
            }
            
            maxProfit = Math.max(maxProfit, price - minimumSellPrice);
            
        }
        return maxProfit;
    }
}
