import java.math.BigInteger;
class Solution {
    public String kthLargestNumber(String[] nums, int k) {
       
        BigInteger[] res = new BigInteger[nums.length];
        for(int i=0; i<nums.length; i++){
            res[i] = new BigInteger(nums[i]);
        }  
       
        Arrays.sort(res, Collections.reverseOrder());
        return res[k-1].toString();
        
    }
}
