class Solution {
    public int majorityElement(int[] nums) {
        int count = 0;
        int maxElement = 0;
        for(int i=0; i<nums.length; i++){
            if(count == 0){
                maxElement = nums[i];
            }
            if(nums[i] == maxElement){
                count++;
            }else{
                count--;
            }
        }
        return maxElement;
    }
}
