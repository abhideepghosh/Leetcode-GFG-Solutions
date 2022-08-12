class Solution {
    public boolean validPalindrome(String s) {
        int i=0,j=s.length()-1;
        while(i<j){
            if(s.charAt(i)!=s.charAt(j))
                return isPalindrome(s,i+1,j) || isPalindrome(s,i,j-1);   
            j--;i++;
        }
        return true;
    }
    public static boolean isPalindrome(String ss,int i, int j){
        while(i<j){
            if(ss.charAt(i)!= ss.charAt(j)) return false;
            i++;j--;
        }
        return true;
    }
}
