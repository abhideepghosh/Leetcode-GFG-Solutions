// Optimized Solution TC: O(N) SC: O(1)
class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        
        // For Storing Data
        List<Integer> result = new ArrayList<>();
        
        // 2 Pointers, start At Beginning, end At The End
        int start = 0;
        int end = arr.length - 1;
        
        // Traversing Till The Pointers Reach A Window Of Length k
        while(end - start >= k){
            
            // start++ if element at start index is closer, else end++;
            if(Math.abs(arr[start] - x) > Math.abs(arr[end] - x)){
                start++;
            }
            else{
                end--;
            }
            
        }
        
        // Filling The Result Array With Data In Between The Pointers Including The Data At The Pointers
        for(int i=start; i<=end; i++){
            result.add(arr[i]);
        }
        
        // Returning The Result
        return result;
        
    }
}
