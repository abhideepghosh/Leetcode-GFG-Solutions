class Solution {
    public int[] plusOne(int[] digits) {
        for(int i = digits.length - 1 ; i>=0 ; i--){
            digits[i] = (digits[i] + 1)%10;
            
            if(digits[i] != 0){
                return digits;
            }
        }
        int[] nums = new int[digits.length+1];
        nums[0] = 1;
        return nums;
    }
}
