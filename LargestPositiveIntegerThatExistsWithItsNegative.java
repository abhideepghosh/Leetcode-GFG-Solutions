class Solution {
    public int findMaxK(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        int max = Integer.MIN_VALUE;
        for(int num : nums){
            set.add(num);
        }
        
        for(int num : nums){
            if(num > 0 && set.contains(-1 * num)){
                if(max < num){
                    max = num;
                }
            }
        }
        
        if(max == Integer.MIN_VALUE){
            return -1;
        }
        
        return max;
        
    }
}
