// Optimised Solution TC: O(n) SC: O(1)
class Solution {
    public int firstUniqChar(String s) {
        int[] charCount = new int[26]; // Constant Space
        for(char c : s.toCharArray()){
            charCount[c-'a']++; // Incrementing the value of index of the 26 lowercase characters
        }
        for(int i=0; i<s.length(); i++){
            char currentChar = s.charAt(i);
            if(charCount[currentChar - 'a'] == 1){
                return i;
            }
        }
        return -1;
    }
}

/*
// Brute Force TC: O(n) SC: O(1)
class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        for(char c : s.toCharArray()){
            map.put(c, map.getOrDefault(c,0)+1);
        }
        for(int i=0; i<s.length(); i++){
            if(map.get(s.charAt(i)) == 1){
                return i;
            }
        }
        return -1;
    }
}
*/
