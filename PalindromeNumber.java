/*
Runtime: 9 ms, faster than 98.77% of Java online submissions for Palindrome Number.
Memory Usage: 41.5 MB, less than 96.60% of Java online submissions for Palindrome Number.
*/
class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0){
            return false;
        }
        int nums = x;
        int reverse = 0;
        while(x != 0){
            reverse = reverse * 10 + x%10;
            x = x/10;
        }
        if(nums == reverse){
            return true;
        }
        return false;
    }
}
