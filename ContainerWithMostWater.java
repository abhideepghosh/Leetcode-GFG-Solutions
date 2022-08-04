class Solution {
    public int maxArea(int[] height) {
        int leftPointer = 0;
        int rightPointer = height.length-1;
        int maxArea = 0;
        while(leftPointer<rightPointer){
            if(height[leftPointer]<height[rightPointer]){
                maxArea = Math.max(maxArea, height[leftPointer]*(rightPointer-leftPointer));
                leftPointer++;
            }else{
                maxArea = Math.max(maxArea, height[rightPointer]*(rightPointer-leftPointer));
                rightPointer--;
            }
        }
        return maxArea;
    }
}
