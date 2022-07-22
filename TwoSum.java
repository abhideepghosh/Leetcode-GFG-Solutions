class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> seen = new HashMap<>();
        int remaining = 0;
        for(int i =0;i<nums.length;i++){
            remaining = target - nums[i];
            if(seen.containsKey(remaining)){
                return new int[] {seen.get(remaining), i};
            }
            seen.put(nums[i],i);
        }
        throw new IllegalArgumentException("No solution");
    }
}
