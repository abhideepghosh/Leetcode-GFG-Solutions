class Solution {
    public int search(int[] nums, int target) {
        int index = Arrays.binarySearch(nums, target);
        if(index <0){
            index = -1;
        }
        return index;
    }
}
