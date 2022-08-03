class Solution {
     public int[] sortedSquares(int[] nums) {
        int[]ans = new int[nums.length];
         int start = 0, end = nums.length-1; 
         int index = end; 
        
        while(start<=end){
            if(nums[start]*nums[start] > nums[end]*nums[end]){
                ans[index] = nums[start]*nums[start];
                index--; 
                start++;
            }else{
                ans[index] = nums[end]*nums[end];
                index--; 
                end--;
           }
        }
        
        return ans;
        
    }
}
