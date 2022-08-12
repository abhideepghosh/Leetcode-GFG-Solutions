// TC: O(n) | SC: O(1)
class Solution {
    public void rotate(int[] nums, int k) {
        k = k % nums.length;
        reverse(nums, 0, nums.length-1);
        reverse(nums, 0, k-1);
        reverse(nums, k, nums.length-1);
    }
    
    public static void reverse(int[] nums, int start, int end){
        while(start < end){
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}

/*
// TC: O(n) | SC: O(n)
class Solution {
    public void rotate(int[] nums, int k) {
        
        k = k % nums.length; //In cases k>nums.length
        
        int[] RotateNum = Arrays.copyOfRange(nums, nums.length - k, nums.length);
        
        //Arrays.copyOfRange(Original_Array, From_Index, To_Index);
        
        int[] RemainNum = Arrays.copyOfRange(nums, 0 , nums.length - k);

        System.arraycopy(RotateNum,0,nums,0,k);
        
         //System.arraycopy(Source_Array, Start_Position, Destination_Array, Position_to_Start_Copying_In_Destination_Array, Number_Of_Elements_To_Be_Copied); 
        
        System.arraycopy(RemainNum,0,nums,k,nums.length - k);
    }
}
*/
