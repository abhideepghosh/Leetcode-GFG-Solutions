class Solution {
    public boolean isIsomorphic(String s, String t) {
        if(s.length() != t.length()){
            return false;
        }
        
        HashMap<Character,Character> characterMap = new HashMap<>();
        HashMap<Character, Boolean> uniqueMap = new HashMap<>();
        
        for(int i=0; i<s.length(); i++){
            char ch1 = s.charAt(i);
            char ch2 = t.charAt(i);
            
            if(characterMap.containsKey(ch1) == true){
                if(characterMap.get(ch1) != ch2){
                    return false;
                }
            }else{
                if(uniqueMap.containsKey(ch2) == true){
                        return false;
                    }else{
                        characterMap.put(ch1,ch2);
                        uniqueMap.put(ch2, true);
                    }
                }
            }
            
        
        
        return true;
        
    }
}
