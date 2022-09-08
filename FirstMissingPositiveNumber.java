// Brute Force Solution TC: O(n) SC: O(n)
class Solution {
    public int firstMissingPositive(int[] nums) {
        
        HashSet<Integer> set = new HashSet<>();
        
        for(int i=0; i<nums.length; i++){
            set.add(nums[i]);
        }
        
        int i=1;
        
        for(i=1; i<=nums.length; i++){
            if(!set.contains(i)){
                return i;
            }
        }
        
        return i;
        
    }
}
