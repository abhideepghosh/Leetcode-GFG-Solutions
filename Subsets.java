/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Subsets.
Memory Usage: 42.2 MB, less than 96.08% of Java online submissions for Subsets.
*/

// TC: O(N * 2^N) SC: O(N)
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        
        List<List<Integer>> result = new ArrayList<>();
        backtracking(0, nums, new ArrayList<Integer>(), result);
        return result;
        
    }
    
    void backtracking(int index, int[] nums, List<Integer> current, List<List<Integer>> result){
        
        result.add(new ArrayList<>(current));
        
        for(int i = index; i < nums.length; i++){
            
            current.add(nums[i]);
            backtracking(i + 1, nums, current, result);
            current.remove(current.size() - 1);
            
        }
        
    }
    
}
