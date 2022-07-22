class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        int min = Integer.MAX_VALUE;
        for(int i=0; i<prices.length; i++){
            if(prices[i]<min){
                min = prices[i];
            }else{
                maxProfit = Math.max(maxProfit, (prices[i]-min));
            }
            
        }
        
        return maxProfit;
    }
}
