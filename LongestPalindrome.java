class Solution {
    public int longestPalindrome(String s) {
        int[] charCount = new int[128];
        
        for(char c: s.toCharArray()){
            charCount[c]++;
        }
        
        int result = 0;
        
        for(int char_count : charCount){
            result = result + (char_count / 2) * 2;
            if(result%2 == 0 && char_count%2==1){
                result++;
            }
        }
        
        return result;
        
    }
}
