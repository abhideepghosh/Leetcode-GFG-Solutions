class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] output = new int[nums.length];
        int zeros = 0;
        for(int num : nums) {
            if(num==0) {
                zeros++;
            }
        }
        if(zeros==1) {
            int prod = 0;
            int ind = 0;
            for(int i = 0; i < nums.length; i++) {
                if(prod==0) {
                    prod = nums[i];
                } else if(nums[i]!=0) {
                    prod*=nums[i];
                } else {
                    ind = i;
                }
            }
            output[ind] = prod;
        } else if(zeros<1){
            int mainProd = 0;
            for(int i = 0; i < nums.length; i++) {
                if(mainProd==0) {
                    mainProd = nums[i];
                } else {
                    mainProd*=nums[i];
                }
            }
            for(int i = 0; i < nums.length; i++) {
                output[i]=mainProd/nums[i];
            }
        }
        return output;
    }
}
