class Solution {
    public int mostFrequentEven(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int num : nums){
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        
        int minNumber = Integer.MAX_VALUE;
        int maxFrequency = 0;
        
        for(int num : nums){
            if(map.get(num) > maxFrequency && num % 2 == 0){
                
                minNumber = num;
                maxFrequency = map.get(num);

            }else if(map.get(num) == maxFrequency && num % 2 == 0){
                minNumber = Math.min(minNumber, num);
            } 
        }
        
        if(minNumber != Integer.MAX_VALUE){
            return minNumber;
        }else {
            return -1;
        }
        
    }
}
