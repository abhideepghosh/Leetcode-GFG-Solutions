/*
Runtime: 2 ms, faster than 99.48% of Java online submissions for Ransom Note.
Memory Usage: 42.4 MB, less than 96.37% of Java online submissions for Ransom Note.
*/
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] charCount = new int[26];
        for(char s : magazine.toCharArray()){
            charCount[s - 'a']++;
        }
        for(char s : ransomNote.toCharArray()){
            if(charCount[s - 'a'] <= 0){
                return false;
            }else{
                charCount[s - 'a']--;
            }
        }
        return true;
    }
}
