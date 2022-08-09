/*
Runtime: 25 ms, faster than 94.76% of Java online submissions for Longest Palindromic Substring.
Memory Usage: 41.8 MB, less than 99.07% of Java online submissions for Longest Palindromic Substring.
*/
// Optimized Solution: O(n^2)
class Solution {
    public String longestPalindrome(String s) {

        int start = 0;
        int end = 0;
        for(int i=0; i<s.length(); i++){
            int len1 = findPalindrome(s,i,i);
            int len2 = findPalindrome(s,i,i+1);
            int maxLength = Math.max(len1, len2);
            if(maxLength > end - start){
                start = i - (maxLength-1)/2;
                end = i + maxLength/2;
            }
        }
        return s.substring(start, end+1);
    }
    
    public static int findPalindrome(String s, int left, int right){
        
        while(left>=0 && right<s.length() && s.charAt(left)==s.charAt(right)){
            left--;
            right++;
        }
        return right - left - 1;
    }
    
}

/*
//Brute Force Solution - O(n^3)
class Solution {
    public String longestPalindrome(String s) {
        int last = s.length()-1;
        String longestPalindrome = "";
        for(int i=0; i<s.length(); i++){
            for(int j = s.length()-1; j>=i; j--){
                StringBuilder str = new StringBuilder();
                String temp = s.substring(i,j+1);
                str.append(temp);
                
                str = str.reverse();
                if(temp.equals(str.toString())){
                    if(longestPalindrome.length() < temp.length()){
                        longestPalindrome = temp;
                    }
                }
            }
        }
        return longestPalindrome;
    }
}
*/
