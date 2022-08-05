class Solution {
    public int firstMissingPositive(int[] nums) {
        boolean containsOne = false;
        for(int i : nums){
            if(i==1){
                containsOne = true;
                break;
            }
        }
        if(!containsOne) return 1;
        
        int n = nums.length;
        if(n==1) return 2;
        
        for(int i=0; i<n; ++i){
            if(nums[i] <= 0 || nums[i] > n)
                nums[i] = 1;
        }
        
        for(int i=0; i<n; ++i){
            int x = Math.abs(nums[i]);
            if(nums[x-1] > 0) nums[x-1] *= -1;
        }
        
        for(int i=0; i<n; ++i){
            if(nums[i] > 0) return i+1;
        }
        
        return n+1;
        
    }
}
