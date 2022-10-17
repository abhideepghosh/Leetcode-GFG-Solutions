// Approach 1: TC: O(N) SC: O(N)
class Solution {
    public boolean checkIfPangram(String sentence) {
        
        int[] charCount = new int[26];
        
        for(char c : sentence.toCharArray()){
            charCount[c - 'a']++;
        }
        
        for(int frequency : charCount){
            if(frequency == 0){
                return false;
            }
        }
        
        return true;
        
    }
}

// Approach 2: One Loop TC: O(N) SC: O(N)
class Solution {
    public boolean checkIfPangram(String sentence) {
        HashSet<Character> set = new HashSet<>();
        for( char c : sentence.toCharArray()){
            set.add(c);
        }
        
        if(set.size() == 26){
            return true;
        }else{
            return false;
        }
        
    }
}
