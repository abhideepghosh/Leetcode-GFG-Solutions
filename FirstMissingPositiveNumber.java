/*
Runtime: 2 ms, faster than 92.60% of Java online submissions for First Missing Positive.
Memory Usage: 57.4 MB, less than 85.36% of Java online submissions for First Missing Positive.
*/
// Optimized Solution TC:O(n) SC: O(1)
class Solution {
    public int firstMissingPositive(int[] nums) {
        // If the Array Doesn't contain 1, return 1;
        boolean containsOne = false;
        for(int i : nums){
            if(i==1){
                containsOne = true;
                break;
            }
        }
        if(!containsOne) return 1;
        
        // If size == 2 and it contains 1, then return 2;
        int n = nums.length;
        if(n==1) return 2;
        
        // Making all numbers > than the size of array to 1
        // This is because maximum of nums[i] continuous positive numbers must exist between 1 to size of array
        // If the array is 1 to sizeOfArray then sizeOfArray+1 would be the next Positive element.
        for(int i=0; i<n; i++){
            if(nums[i] <= 0 || nums[i] > n)
                nums[i] = 1;
        }
        
        //Looping From 0 to sizeOfArray
        for(int i=0; i<n; i++){
            // Converting nums[i] to positive
            int x = Math.abs(nums[i]);
            // Converting previous number of converted number To negative
            if(nums[x-1] > 0) nums[x-1] *= -1;
        }
        
        // Checking For The First Negative Number.
        for(int i=0; i<n; i++){
            // Returning The Next Number To The Negative Number Which isn't exising In The Array
            if(nums[i] > 0) return i+1;
        }
        
        // If The Complete Loop Ends And No Value Is Found, We Return the sizeOfArray + 1
        return n+1;
        
    }
}



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
