class Solution {
    public long maximumSubarraySum(int[] nums, int k) {
        
        long result = 0L;
        long sum = 0L;
        
        int n = nums.length;
        
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for(int i=0; i<n; i++){
            map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
            sum += nums[i];
            if(i >= k){
                
                map.put(nums[i - k], map.get(nums[i - k]) - 1);
                sum  -= nums[i-k];
                if(map.get(nums[i - k]) == 0){
                    map.remove(nums[i - k]);
                }
                
            }
            
            if(map.size() == k){
                result = Math.max(result, sum);
            }
            
        }
        
        return result;
        
    }
    
}
