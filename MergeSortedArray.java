/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Merge Sorted Array.
Memory Usage: 42.3 MB, less than 91.21% of Java online submissions for Merge Sorted Array.
*/
// Optimized Solution TC: O(n) SC: O(1)
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        
        int index = nums1.length - 1;   // Index for insertion (From The End)
        int i = m-1;                    // Index for nums1 (From The End)
        int j = n-1;                    //Index for nums2 (From The End)
        
        // Traversing From The End Of The Array Inserting Elements In Sorted Manner
        while(index >= 0){
            
            int nums1Value = (i >= 0) ? nums1[i] : Integer.MIN_VALUE;
            int nums2Value = (j >= 0) ? nums2[j] : Integer.MIN_VALUE;
            
            if(nums1Value > nums2Value){
                nums1[index] = nums1Value;
                i--;
            }else{
                nums1[index] = nums2Value;
                j--;
            }
            
            index--;
        }
    }
}
