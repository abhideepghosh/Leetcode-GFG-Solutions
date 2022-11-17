// TC: O(NlogN) SC: O(N)
class Solution {
    public int lengthOfLIS(int[] nums) {
        
        TreeSet<Integer> bst = new TreeSet<>();
        
        for(int num : nums){
            Integer data = bst.ceiling(num);
            
            if(data != null){
                bst.remove(data);
            }
            
            bst.add(num);
            
        }
        
        return bst.size();
        
    }
}



// TC: O(n^2) SC: O(n)
class Solution {
    public int lengthOfLIS(int[] nums) {
        
        // To Store The Longest Subsequence Upto The Index Of Every Element
        int dp[] = new int[nums.length];
        
        // To Store The Longest Subsequence Length
        int maxCount = 0;
        
        // Tabulation
        for(int i=0; i<nums.length; i++){
            
            int count = 0;
            
            // Checking All The Length Of Longest Subsequence Before The Number
            for(int j=0; j<i; j++){
                
                // Cheecking For Strictly Increasing Subsequence
                if(nums[j] < nums[i]){
                    count = Math.max(count, dp[j]);
                }
            }
            
            // Adding Its Own Length After Merging With The Previous Maximum Length Subsequence
            dp[i] = count + 1;
            maxCount = Math.max(maxCount, dp[i]);
            
        }
        
        // Returning The Longest Subsequence Length
        return maxCount;
    }
}
