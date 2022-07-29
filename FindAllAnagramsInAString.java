class Solution {
	//Correct Approach --> Sliding Window
    public List<Integer> findAnagrams(String s, String p) {
        
        List<Integer> result = new ArrayList<>();
        
        if(s.length()==0 || s.isEmpty()){
            return result;
        }
        
        int[] charCounts = new int[26];
        
        for(char c : p.toCharArray()){
            charCounts[c-'a']++;
        }
        
        int left = 0;
        int right = 0;
        int count = p.length();
        
        while(right < s.length()){
            if(charCounts[s.charAt(right++)-'a']-- >=1){
                count--;
            }
            if(count == 0){
                result.add(left);
            }
            if(right - left == p.length() && charCounts[s.charAt(left++)-'a']++>=0){
                
                count++;
                
            }
        }
        return result;
    }
}

// Sorting Approach --> Should not be done --> will end up with TLE For extremely large strings
/*
class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        
        List<Integer> list = new ArrayList<>();
        // HashSet<Integer> set = new HashSet<Integer>();
        
        if(s.length() < p.length()){
            return list;
        }
        if(s.length() == p.length()){
            int[] charCount = new int[128];
            for(char c : s.toCharArray()){
                charCount[c]++;
            }
            for(char c : p.toCharArray()){
                charCount[c]++;
            }
            for(int i : charCount){
                if(i%2 !=0){
                    return list;
                }
            }
            list.add(0);
            return list;
        }
        
        char[] checker = p.toCharArray();
        Arrays.sort(checker);
        p = new String(checker);
        
        
        for(int i=0; i<s.length(); i++){
            if(s.length() >= i+p.length()){
                String str = s.substring(i,i+p.length());
                char[] check = str.toCharArray();
                Arrays.sort(check);
                str = new String(check);
                if(str.indexOf(p) != -1){
                    list.add(i);
                }    
            }
            
        }
        
        // List<Integer> list = new ArrayList<>(set);
        
        return list;
        
        
    }
}
*/
