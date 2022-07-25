class Solution {
    public int[] searchRange(int[] nums, int target) {
        
        int[] result = new int[2];
        result[0] = findStartingPosition(nums, target);
        result[1] = findEndingPosition(nums, target);
        
        return result;
        
    }
    
    public static int findStartingPosition(int[] nums, int target){
        int index = -1;
        int start = 0;
        int end = nums.length - 1;
        while(start<=end){
            int mid = start + (end - start)/2;
            
            if(nums[mid] >= target){
                end = mid - 1;
            }else{
                start = mid+1;
            }
            
            if(nums[mid] == target){
                index = mid;
            }
            
        }
        
        
        
        return index;
    }
    
    public static int findEndingPosition(int[] nums, int target){
        int index = -1;
         int start = 0;
        int end = nums.length - 1;
        while(start<=end){
            int mid = start + (end - start)/2;
            if(nums[mid]<= target){
            start = mid + 1;
            }else{
            end = mid - 1;
            }
        
            if(nums[mid] == target){
                index = mid;
            }
        }
        
        
        
        
        return index;
    }
}
        
        
        
        
        // Two Pointer Approach
//         if(nums.length == 1){
//             if(nums[0] == target){
//                 return new int[] {0,0};
//             }else{
//                 return new int[] {-1,-1};
//             }
//         }
        
//         int leftPointer = 0;
//         int rightPointer = nums.length - 1;
//         while(leftPointer< rightPointer){
//             if(nums[leftPointer]!=target){
//                 leftPointer++;
//             }
//             if(nums[rightPointer] != target){
//                 rightPointer--;
//             }
//             if(leftPointer == rightPointer - 1 && nums[leftPointer]!= target && 
//                nums[rightPointer] == target){
//                 return new int[]{rightPointer, rightPointer};
//             }
//             if(rightPointer == leftPointer + 1 && nums[rightPointer]!= target && 
//                nums[leftPointer] == target){
//                 return new int[]{leftPointer, leftPointer};
//             }
//             if(nums[leftPointer] == target && nums[rightPointer] == target){
//                 return new int[] {leftPointer, rightPointer};
//             }
//         }
               
//         return new int[] {-1, -1};
               


    
    
