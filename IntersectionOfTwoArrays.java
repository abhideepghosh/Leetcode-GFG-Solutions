// Optimized Solution
/*
Runtime: 2 ms, faster than 97.86% of Java online submissions for Intersection of Two Arrays.
Memory Usage: 43.9 MB, less than 55.84% of Java online submissions for Intersection of Two Arrays.
*/
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        
        int[] dp = new int[1001];
        
        for(int i : nums1){
            if(dp[i] == 0){
                dp[i]++;    
            }  
        }
        for(int i : nums2){
            if(dp[i] == 1){
                dp[i]++;    
            }
        }
        
        int[] res = new int[Math.min(nums1.length, nums2.length)];
        int index = 0;
        
        for(int i=0; i<dp.length; i++){
            if(dp[i] >1){
                res[index] = i;
                index++;
            }
        }
        
        return Arrays.copyOfRange(res, 0, index);
    }
}

// Brute Force
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        
        HashSet<Integer> set1 = new HashSet<>();
        HashSet<Integer> set2 = new HashSet<>();
        for(int i=0; i<nums1.length; i++){
            set1.add(nums1[i]);
        }
        for(int i=0; i<nums2.length; i++){
            set2.add(nums2[i]);
        }
        int[] nums = new int[Math.min(set1.size(), set2.size())];
        int index = 0;
        
        for(int val : set1){
            if(set2.contains(val)){
                nums[index] = val;
                index++;
            }
        }
        
        return Arrays.copyOfRange(nums, 0, index);
        
    }
}
