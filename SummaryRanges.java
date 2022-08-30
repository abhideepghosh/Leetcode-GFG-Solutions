/*
Prefered Interview Approach (More Readable) TC: O(n) SC: O(1)
Runtime: 6 ms, faster than 86.88% of Java online submissions for Summary Ranges.
Memory Usage: 40.5 MB, less than 96.83% of Java online submissions for Summary Ranges.
*/
class Solution {
    public List<String> summaryRanges(int[] nums) {
        
        // For Storing And Returning Result
        List<String> result = new ArrayList<>();
        
        // Iterating Through The Array
        for(int i=0; i<nums.length; i++){
            
            /*
            If nums[i] Changes, That Would Mean There Are Numbers That Will Increase The Range.
            The While Loop Inside The For Loop Will Not Be Considered In Time Complexity As
            Its Helping The For Loop (Outer Loop) To Finish Faster And Not Multiplying Its Time Up.
            */
            int start = nums[i];
            
            // Inner While Loop To Increment i Faster And Check The next Elements
            while(i+1 < nums.length && nums[i]+1 == nums[i+1]){
                i++;
            }
            
            // Adding Ranges To The Result
            if(nums[i] != start){
                result.add(start + "->" + nums[i]);
            }else{
                result.add(start + "");
            }
        }
        
        //Returning The Result
        return result;
        
    }
}


/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Summary Ranges.
Memory Usage: 40.5 MB, less than 96.83% of Java online submissions for Summary Ranges.
*/
// Another Approach (Faster In Practice But Less Readable) TC: O(n) SC: O(1)
  public List<String> summaryRanges(int[] nums) {
    
      List<String> result = new ArrayList<>();
    
      if(nums.length == 0){
        return result;
      }
    
      int startIndex = 0;
      StringBuilder sb = new StringBuilder();
      
      for(int i = 0; i < nums.length - 1; i++) {
        
        if(sb.isEmpty()) {
          sb.append(nums[i]);
          startIndex = i;
        } 
        
        if(nums[i] != nums[i+1] -1) {
          
            if(i != startIndex){
              sb.append("->").append(nums[i]);
            }
            result.add(sb.toString());
            sb = new StringBuilder();
          
        }
      }
      if(!sb.isEmpty()){
         sb.append("->");
      }
      sb.append(nums[nums.length - 1]);
      result.add(sb.toString());
      return result;
    }
