class Solution {
   int[] kLargest(int[] arr, int n, int k) {
       // code here
       Arrays.sort(arr);
       int[] res = new int[k];
       n=n-1;
       for(int i=0; i<k; i++){
           res[i] = arr[n-i];
       }
       return res;
   }
}
