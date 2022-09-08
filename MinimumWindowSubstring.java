class Solution {
    public String minWindow(String s, String t) {
        
        String result = "";
        
        HashMap<Character, Integer> desiredStr = new HashMap<>();
        HashMap<Character, Integer> findStr = new HashMap<>();
        
        for(int i=0; i<t.length(); i++){
            desiredStr.put(t.charAt(i), desiredStr.getOrDefault(t.charAt(i), 0) + 1);
        }
        
        boolean flagFirst = true;
        boolean flagSecond = true;
        
        int desiredCount = t.length();
        int findCount = 0;
        
        int indexFront = -1;
        int indexRear = -1;
        
        while(flagFirst == true && flagSecond == true){
            
            flagFirst = false;
            flagSecond = false;
            
            while(indexRear < s.length()-1 && findCount < desiredCount){
                
                indexRear++;
                
                findStr.put(s.charAt(indexRear), findStr.getOrDefault(s.charAt(indexRear), 0) + 1);
                
                if(findStr.getOrDefault(s.charAt(indexRear), 0) <= desiredStr.getOrDefault(s.charAt(indexRear), 0)){
                    findCount++;
                }
                
                flagFirst = true;
                
            }
            
            while(indexFront < indexRear && findCount == desiredCount){
                
                String possibleResult = s.substring(indexFront + 1, indexRear + 1);
                
                if(result.length() == 0 || result.length() > possibleResult.length()){
                    result = possibleResult;
                }
                
                indexFront++;
                
                if(findStr.get(s.charAt(indexFront)) == 1){
                    findStr.remove(s.charAt(indexFront));
                }else{
                    findStr.put(s.charAt(indexFront), findStr.get(s.charAt(indexFront)) - 1);
                }
                
                if(findStr.getOrDefault(s.charAt(indexFront), 0) < desiredStr.getOrDefault(s.charAt(indexFront), 0)){
                    findCount--;
                }
                
                flagSecond = true;
                
            }
            
        }
        
        return result;
        
    }
}
