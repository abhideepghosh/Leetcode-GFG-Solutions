/*
Approach 1: Brute Force TC: O(n) SC: O(n)
    1. We Merge The Two Sorted Array (Basic Merging Method Of Merge Sort, With 2 Pointers.
    2. We Find The Median Of The New Array.
*/
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        
        int nums1Pointer = 0;
        int nums2Pointer = 0;
        int numsPointer = 0;
        int[] nums = new int[nums1.length + nums2.length];
        
        while(nums1Pointer < nums1.length && nums2Pointer < nums2.length){
            if(nums1[nums1Pointer] < nums2[nums2Pointer]){
                nums[numsPointer] = nums1[nums1Pointer];
                nums1Pointer++;
            }else{
                nums[numsPointer] = nums2[nums2Pointer];
                nums2Pointer++;
            }
            numsPointer++;
        }
        
        while(nums1Pointer<nums1.length){
            nums[numsPointer] = nums1[nums1Pointer];
            numsPointer++;
            nums1Pointer++;
        }
        
        while(nums2Pointer<nums2.length){
            nums[numsPointer] = nums2[nums2Pointer];
            numsPointer++;
            nums2Pointer++;
        }
        
        if(nums.length%2 == 0){
            double median = (double)(nums[nums.length/2] + nums[(nums.length/2) - 1])/2;
            return median;
        }else{
            double median = nums[(nums.length-1)/2];
            return median;
        }
            
    }
}



/*
Approach 2: Optimized TC: O(logn) SC: O(1) Solution Using Binary Search
    1. We Use Binary Search To Create Partitions In Both The Sorted Arrays
    2. We Check If The Left And Rights Of The Partition Satisfies The Conditions Which Are Written In Comments Below.
*/
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        
        //Calling The Function Again With nums1 As The Smaller Size Array 
        if(nums1.length > nums2.length){
            return findMedianSortedArrays(nums2, nums1);
        }
        
        // Applying Binary Search To The 2 Arrays
        int nums1Length = nums1.length;
        int nums2Length = nums2.length;
        int start = 0;
        int end = nums1Length;
        
        while(start <= end){
            
            int partition1 = start + (end-start)/2; // Mid Partition In The Smaller Size Array
            int partition2 = (nums1Length + nums2Length + 1)/2 - partition1; // Mid Partition In The Larger Size Array
            
            // Taking Left And Right Values Of The Partition Of Both The Arrays And Cross Checking Them
            int left1 = (partition1 > 0)? nums1[partition1 - 1] : Integer.MIN_VALUE;
            int left2 = (partition2 > 0)? nums2[partition2 - 1] : Integer.MIN_VALUE;
            
            int right1 = (partition1 < nums1Length)? nums1[partition1] : Integer.MAX_VALUE;
            int right2 = (partition2 < nums2Length)? nums2[partition2] : Integer.MAX_VALUE;
            
            /*
            If Left Value Of The First Array Is Smaller Than Right Value Of The Second Array 
                                               And
            Left Value Of The Second Array Is Smaller Than Right Value Of The First Array
                                              Then
            We Check If The Size Of The Sum Of Length Of Both Arrays Is Odd Or Even Because
            If Odd, We Return The Max Of Left1 And Left2, And If Even We Return The Average
            Of (Max(left1, left2) + Min(right1, right2)) / 2.0 as per the Average Formula.
            */
            if(left1 <= right2 && left2 <= right1){
                if((nums1Length + nums2Length) % 2 == 0){
                    return (Math.max(left1, left2) + Math.min(right1, right2)) / 2.0;
                }
                else{
                    return Math.max(left1, left2);
                }
            }
            else if(left1 > right2){    // Base Binary Search Condition
                end = partition1 - 1;
            }
            else{
                start = partition1 + 1; // Base Binary Search Condition
            }
            
        }
        
        // Default Return Input
        return 0.0;
        
    }
}
