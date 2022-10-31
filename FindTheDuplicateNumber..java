// Optimised Solution Without Modifying The Array: TC: O(N) SC: O(1)
class Solution {
    public int findDuplicate(int[] nums) {
        int stable = nums[0];
        int fast = nums[0];
        
        do{
            
            stable = nums[stable];
            fast = nums[nums[fast]];
            
        }while(stable != fast);
        
        stable = nums[0];
        
        while(stable != fast){
            stable = nums[stable];
            fast = nums[fast];
        }
        
        return stable;
        
    }
}



// Optimised Solution In One Loop (With Array Modification) TC: O(n) SC: O(1)
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


// Brute Force Solution TC: O(n) SC: O(n)
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
