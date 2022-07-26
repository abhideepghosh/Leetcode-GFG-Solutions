class Solution {
    public void reverseString(char[] s) {
        for(int i=0; i<=(s.length-1)/2; i++){
            char ch = s[i];
            s[i] = s[s.length-1-i];
            s[s.length-1-i] = ch;
        }
    }
}
