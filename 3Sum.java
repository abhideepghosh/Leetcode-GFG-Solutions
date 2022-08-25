/*
Runtime: 21 ms, faster than 99.57% of Java online submissions for 3Sum.
Memory Usage: 46.6 MB, less than 92.96% of Java online submissions for 3Sum.
*/

//Optimized Solution TC: O(n^2)
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        
        //Sorting The Array For Applying 2 Pointer Method
        Arrays.sort(nums);
        
        // Creating the Result List To Be Returned
        List<List<Integer>> result = new LinkedList<>();
        
        // Outer Loop To Traverse Through All Elements And Stopping It Before The Last 2 Elements
        for(int i=0; i<nums.length-2; i++){
            
            // Condition To Avoid Duplicates In The Result Array
            if(i==0 || (i>0 && nums[i] != nums[i-1])){
                
                // Taking The Start As The Next Element To The Index Of Element In The Outer Loop
                // Taking The End As The Index Of The Last Element In The Array
                // This Works Only Because The Array Is Sorted.
                int start = i+1;
                int end = nums.length-1;
                
                // To Get The Answer As Zero, We Set The Sum As -nums[i];
                int sum = 0 - nums[i];
                
                // 2 Pointers Traversing From the Beginning And End Of The Subarray
                while(start < end){
                    
                    /*  nums[start] + nums[end] = 0 - nums[i] 
                        equates to 
                        nums[start] + nums[end] + nums[i] == 0 */
                    if(nums[start] + nums[end] == sum){
                        
                        // Adding Result To The Result Array
                        result.add(Arrays.asList(nums[i], nums[start], nums[end]));
                        
                        // Skipping Duplicate Elements In A Sorted Array From The Start
                        while(start < end && nums[start] == nums[start+1]){
                            start++;
                        }
                        // Skipping Duplicate Elements In A Sorted Array From The End
                        while(start < end && nums[end] == nums[end-1]){
                            end--;
                        }
                        // Skipping The Last Duplicates From Both Sides
                        start++;
                        end--;
                        
                    }
                    // Moving Pointers From Both Sides Towards Mid Of The Array
                    else if(nums[start] + nums[end] < sum){
                        start++;
                    }else{
                        end--;
                    }
                }
            }
        }
        
        // Returning The Result Array
        return result;
        
    }
}
