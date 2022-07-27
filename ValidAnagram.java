class Solution {
    public boolean isAnagram(String s, String t) {
        int[] charCount = new int[128];
        for(char c : s.toCharArray()){
            charCount[c]++;
        }
        int[] charCountT = new int[128];
        for(char c : t.toCharArray()){
            charCountT[c]++;
        }
        for(int i=0; i<128; i++){
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
