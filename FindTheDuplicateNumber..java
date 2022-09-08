// Optimised Solution TC: O(n) SC: O(1)
class Solution {
    public int findDuplicate(int[] nums) {
        
        while(nums[0] != nums[nums[0]]){
            int next = nums[nums[0]];
            nums[nums[0]] = nums[0];
            nums[0] = next;
        }
        
        return nums[0];
        
    }
}


// Better Optimized Solution TC: O(n) SC: O(n)
class Solution {
    public int findDuplicate(int[] nums) {
        
        // Using HashSet To Store Unique Values
        HashSet<Integer> set = new HashSet<>();
        
        //Traversing Through The Array
        for(int num : nums){
            
            // Whenever set.add() returnns false, Return The Number As Its A Duplicate
            if(!set.add(num)){
                //Returning Duplicate
                return num;
            }
        }
        
        // Default Return In Case No Duplicate Is Found
        return -1;
    }
}
