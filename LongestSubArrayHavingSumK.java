class Solution{
    
   
    // Function for finding maximum and value pair
    public static int lenOfLongSubarr (int A[], int N, int K) {
        //Complete the function
        Map<Integer, Integer> map = new HashMap<>();
        int maxLength = 0;
        int sum = 0;
        
        for(int i=0; i<N; i++){
            sum += A[i];
            
            if(sum == K){
                maxLength = i+1;
            }
            
            if(!map.containsKey(sum)){
                map.put(sum, i);
            }
            if(map.containsKey(sum - K)){
                if(maxLength < (i - map.get(sum - K))){
                    maxLength = i-map.get(sum - K);
                }
            }
        }
        return maxLength;
    }
    
    
}
