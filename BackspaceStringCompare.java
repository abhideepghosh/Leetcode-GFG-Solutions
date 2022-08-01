class Solution {
    public boolean backspaceCompare(String s, String t) {
        int sPointer = s.length()-1;
        int tPointer = t.length()-1;
        int sSkip = 0;
        int tSkip = 0;
        
        
        while(sPointer >= 0 || tPointer >= 0){
            while(sPointer >= 0){
                if(s.charAt(sPointer) == '#'){
                    sPointer--;
                    sSkip++;
                }else if(sSkip>0){
                    sPointer--;
                    sSkip--;
                }else{
                    break;
                }
            }
            while(tPointer >= 0){
                if(t.charAt(tPointer) == '#'){
                    tPointer--;
                    tSkip++;
                }else if(tSkip>0){
                    tPointer--;
                    tSkip--;
                }else{
                    break;
                }
            }
            
            if(sPointer >= 0 && tPointer >= 0 && (s.charAt(sPointer) != t.charAt(tPointer))){
                return false;
            }
            
            if((sPointer >= 0) != (tPointer >= 0)){
                return false;
            }
            
            sPointer--;
            tPointer--;
        }
        return true;
    }
}
