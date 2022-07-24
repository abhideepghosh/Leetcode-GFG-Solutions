class Solution {
    public int search(int[] nums, int target) {
        int index = Arrays.binarySearch(nums, target);
        if(index <0){       ////This condition becomes necessary because the library function at times returns values >-1
            index = -1;
        }
        return index;
    }
}
