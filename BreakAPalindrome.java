/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Break a Palindrome.
Memory Usage: 40.3 MB, less than 92.59% of Java online submissions for Break a Palindrome.
*/
// TC: O(N) SC: O(N)
class Solution {
    public String breakPalindrome(String palindrome) {
        
        // If Size Of The String Is <= 1, Then We Return An Empty String
        if(palindrome.length() < 2){
            return "";
        }
        
        // Convert String To Char Array
        char[] letters = palindrome.toCharArray();
        
        // Checking Half Of The String Because The Other Half Will Be Same
        for(int i=0; i<letters.length/2; i++){
            // If Char Isn't 'a' Then We Change The Character To 'a' And Return The Char Array As A String
            if(letters[i] != 'a'){
                letters[i] = 'a';
                return new String(letters);
            }
        }
        
        // Edge Case : If All The Letters Are A Then We Change The Last Character To 'b'
        letters[letters.length - 1] = 'b';
        
        // Returning The Char Array As A String
        return new String(letters);
        
    }
}
