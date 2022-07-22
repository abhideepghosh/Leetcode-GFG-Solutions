class Solution {
    public static int trap(int[] height) {
		int j= height.length-1;
		int[] left = new int[height.length];
		int[] right = new int[height.length];
		int leftMax =0;
		int rightMax =0;
		
		int result =0;
		
		for(int i=0;i<height.length;i++) {
			leftMax = Math.max(leftMax, height[i]);
			left[i] = leftMax;
			rightMax = Math.max(rightMax, height[j]);
			right[j] = rightMax;
			j--;
		}
		
		for(int i=0;i<height.length;i++) {
			result+= Math.min(left[i],right[i])-height[i];
		}
		
		return result;

	}
}
