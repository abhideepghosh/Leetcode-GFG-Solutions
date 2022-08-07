class Solution {
    public boolean isAnagram(String s, String t) {
        int[] charCount = new int[26];
        for(char c : s.toCharArray()){
            charCount[c-'a']++;
        }
        int[] charCountT = new int[26];
        for(char c : t.toCharArray()){
            charCountT[c-'a']++;
        }
        for(int i=0; i<26; i++){
            if(charCount[i] != charCountT[i]){
                return false;
            }
        }
        return true;
    }
}


/*
class Solution {
    public boolean isAnagram(String s, String t) {
        char[] str = s.toCharArray();
        char[] ttr = t.toCharArray();
        
        Arrays.sort(str);
        Arrays.sort(ttr);
        String sol1 = new String(str);
        String sol2 = new String(ttr);
        
        if(sol1.equals(sol2))
            return true;
        
        else return false;
    }
} 

*/


/*
class Solution {
    public boolean isAnagram(String s, String t) {
        char[] str = s.toCharArray();
        char[] ttr = t.toCharArray();
        
        Arrays.sort(str);
        Arrays.sort(ttr);
        String sol1 = new String(str);
        String sol2 = new String(ttr);
        
        if(sol1.equals(sol2))
            return true;
        
        else return false;
    }
}
*/
