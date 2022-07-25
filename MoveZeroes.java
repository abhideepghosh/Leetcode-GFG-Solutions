class Solution {
    public void moveZeroes(int[] nums) {
        if(nums.length == 1){
            return;
        }
        
        int pointer = 0;
        
        for(int i=0; i<nums.length; i++){
            if(nums[i] != 0){
                nums[pointer] = nums[i];
                if(i != pointer){
                    nums[i] = 0;   
                }
                
                pointer++;
            }
        }
        
    }
}
