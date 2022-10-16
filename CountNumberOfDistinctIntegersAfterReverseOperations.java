class Solution {
    public int countDistinctIntegers(int[] nums) {
        
        HashSet<Integer> set = new HashSet<>();
        
        for(int num : nums){
            set.add(num);
        }
        
        for(int num : nums){
            StringBuilder str = new StringBuilder();
            str.append(num + "");
            str.reverse();
            set.add(Integer.parseInt(str.toString()));
        }
        
        return set.size();
        
    }
}
