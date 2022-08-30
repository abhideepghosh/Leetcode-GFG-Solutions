/*
Runtime: 3 ms, faster than 97.52% of Java online submissions for Container With Most Water.
Memory Usage: 81.6 MB, less than 19.92% of Java online submissions for Container With Most Water.
*/
// Optimized 2 Pointer Approach TC: O(n)
class Solution {
    public int maxArea(int[] height) {
        
        // Defining 2 Pointers At The End Of The Array
        int leftPointer = 0;
        int rightPointer = height.length - 1;
        
        // Defining the int Variable To Store The Final Result
        int maxWaterInContainer = 0;
        
        /* 
        Approach:
           Checking From Both Sides, we find which height is smaller in the array and multiply it with the distance
           between both the points.
           Then we store its value based on whether the already stored max value is larger or not than the current 
           area value.
           We are multiplying height with distance in order to find the area of the rectangle formed.
           Then we increment the leftPointer or decrement the rightPointer based on whose height value is smaller.
        */
        while(leftPointer < rightPointer){
            
            int waterContained = 0;
            
            if(height[leftPointer] < height[rightPointer]){
                waterContained = height[leftPointer] * (rightPointer - leftPointer);
                leftPointer++;
            }else{
                waterContained = height[rightPointer] * (rightPointer - leftPointer);
                rightPointer--;
            }
            
            maxWaterInContainer = Math.max(maxWaterInContainer, waterContained);
        }
        
        // Returning The Final Result
        return maxWaterInContainer;
        
    }
}
