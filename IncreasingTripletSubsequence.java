class Solution {
    public boolean increasingTriplet(int[] nums) {
        int i= Integer.MAX_VALUE;
        int j = Integer.MAX_VALUE;
        
        for(int in=0; in<nums.length; in++){
            if(nums[in] <= i){
                i = nums[in];
            }else if(nums[in] <= j){
                j = nums[in];
            }else{
                return true;
            }
        }
        return false;
    }
}
