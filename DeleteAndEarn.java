class Solution {
    public int deleteAndEarn(int[] nums) {
        
        int include = 0;
        int exclude = 0;
        
        int[] dp = new int[10001];
        
        for(int num : nums){
            dp[num]++;
        }
        
        for(int i=0; i<10001; i++){
            
            int ni = exclude + dp[i] * i;
            int ne = Math.max(include, exclude);
            
            include = ni;
            exclude = ne;
            
        }
        
        return Math.max(include, exclude);
        
    }
}
