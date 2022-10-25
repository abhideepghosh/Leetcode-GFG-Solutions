class Solution {
    public int subarrayGCD(int[] nums, int k) {
        int result = 0;
        for(int i=0; i<nums.length; i++){
            int gcdVal = 0;
            for(int j=i; j<nums.length; j++){
                gcdVal = gcd(gcdVal, nums[j]);
                result += (gcdVal == k) ? 1 : 0;
            }
        }
        return result;
    }
    
    public int gcd(int a, int b){
        if(b == 0){
            return a;
        }
        return gcd(b, a % b);
    }
}
