// Approach 1: Dynamic Programming (100% Faster)
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        int[] dp = new int[1000+1]; // Max constaints Constaints + 1
        for(int i : nums1){
            dp[i]++;    
        }
        int[] res = new int[Math.min(nums1.length, nums2.length)];
        int pointer = 0;
        for(int i : nums2){
            if(dp[i] != 0){
                res[pointer] = i;
                pointer++;
                dp[i]--;
            }
        }
        return Arrays.copyOfRange(res, 0, pointer);
    }
}



// //      Approach 2: More Optimized Than The Brute Force Solution:
// class Solution {
//     public int[] intersect(int[] nums1, int[] nums2) {
        
//         if(nums1.length ==0 ||  nums2.length==0){
//             return new int[] {};
//         }
        
//         int i=0, j=0, k=0;
//         int[] sol = new int[Math.min(nums1.length, nums2.length)];
//         Arrays.sort(nums1);
//         Arrays.sort(nums2);
        
//         while(i<nums1.length && j<nums2.length){
//             if(nums1[i]==nums2[j]){
//                 sol[k] = nums1[i];
//                 k++;
//                 i++;
//                 j++;
//             }else if(nums1[i]<nums2[j]){
//                 i++;
//             }else{
//                 j++;
//             }
//         }
        
//         int[] output = new int[k];
//         for(int a=0; a<k; a++){
//             output[a] = sol[a];
//         }
        
//         return output;


//         Approach 3:        
//         List<Integer> list = new ArrayList<>();
//         for(int i=0; i<nums1.length; i++){
//             for(int j = 0; j<nums2.length; j++){
//                 if(nums1[i]==nums2[j]){
//                     list.add(nums1[i]);
//                     // nums1[i] = Integer.MIN_VALUE;
//                     nums2[j] = Integer.MIN_VALUE;
//                     break;
//                 }
//             }
//         }
        
//         int[] sol = new int[list.size()];
        
//         for(int i=0; i<sol.length; i++){
//             sol[i] = list.get(i);
//         }
//         return sol;
    }
}
