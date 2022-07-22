class Solution {
    public boolean isSubsequence(String s, String t) {
        if(s.length()>t.length()){
            return false;
        }
        int i=0;
        int count = 0;
        int j = 0;
        
        while(i<s.length() && j < t.length()){
            if(s.charAt(i) == t.charAt(j)){
                count++;
                i++;
                if(i == s.length() && count !=s.length()){
                    return false;
                }
                if(i == s.length() && count == s.length()){
                    return true;
                }
            }
            j++;
        }
        
        if(count == s.length()){
            return true;
        }else{
            return false;
        }
        
    }
}
