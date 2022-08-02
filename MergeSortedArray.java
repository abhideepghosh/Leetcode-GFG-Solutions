class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = 0;
        int j = 0;
        int k = 0;
        
        int[] nums = new int[m];
        for(int t=0; t<m; t++){
            nums[t] = nums1[t];
        }
        
        while(i<m && j<n){
            if(nums[i] < nums2[j]){
                nums1[k] = nums[i];
                i++;
            }else{
                nums1[k] = nums2[j];
                j++;
            }
            
            k++;
        }
        
        while(i<m){
            nums1[k] = nums[i];
            i++;
            k++;
        }
        while(j<n){
            nums1[k] = nums2[j];
            j++;
            k++;
        }
    }
}
