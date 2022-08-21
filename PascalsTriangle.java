/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Pascal's Triangle.
Memory Usage: 42.4 MB, less than 5.53% of Java online submissions for Pascal's Triangle.
*/
class Solution {
    public List<List<Integer>> generate(int numRows) {
    
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> prevList = new ArrayList<Integer>();
       
        // Setting Up The Foundation Of The Pascal's Triangle
        List<Integer> one = new ArrayList<Integer>();
        one.add(1);
        result.add(one);
        if(numRows == 1){
            return result;
        }
        prevList.add(1);
        prevList.add(1);
        result.add(prevList);
        if(numRows == 2){
            return result;
        }
        
        // Formation Of Pascal's Triangle for NumRows >= 3
        for(int i = 3; i <= numRows; i++){
           
            List<Integer> nums = new ArrayList<Integer>();
            
            for(int j = 0; j< i; j++){
                if(j == 0 || j == i-1){
                    nums.add(1);
                }else{
                    int ans = prevList.get(j) + prevList.get(j-1);
                    nums.add(ans);
                }
            }
            
            result.add(nums);
            prevList = nums; 
            
        }
        return result;
    }
}
