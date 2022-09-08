// Time Complexity O(n^2) Space Complexity O(n)
class Solution {
    public String minWindow(String s, String t) {
        
        // For Storing Result
        String result = "";
        
        // DesiredStr - Used For Storing t
        //findStr - Used For Storing The Window
        HashMap<Character, Integer> desiredStr = new HashMap<>();
        HashMap<Character, Integer> findStr = new HashMap<>();
        
        // Filling desiredStr With Characters And Their Frequencies
        for(int i=0; i<t.length(); i++){
            desiredStr.put(t.charAt(i), desiredStr.getOrDefault(t.charAt(i), 0) + 1);
        }
        
        // Flag To Check Whether The Inside Loops Run Everytime
        boolean flagFirst = true;
        boolean flagSecond = true;
        
        // Desired String Count 
        int desiredCount = t.length();
        
        // Window String Count
        int findCount = 0;
        
        // Indexes Of Front And Rear In The Loop
        int indexFront = -1;
        int indexRear = -1;
        
        // Outer Loop To Run Till Both flagFirst And FlagSecond Is False
        while(flagFirst == true && flagSecond == true){
            
            flagFirst = false;
            flagSecond = false;
            
            // Inputing Characters In The HashMap Till We Find All The Desired String Characters In It
            while(indexRear < s.length()-1 && findCount < desiredCount){
                
                indexRear++;
                
                findStr.put(s.charAt(indexRear), findStr.getOrDefault(s.charAt(indexRear), 0) + 1);
                
                if(findStr.getOrDefault(s.charAt(indexRear), 0) <= desiredStr.getOrDefault(s.charAt(indexRear), 0)){
                    findCount++;
                }
                
                flagFirst = true;
                
            }
            
            // Shortening The Window From The Front Until findCount Remains Equal To The desiredCount
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
        
        // Returning The Final Result
        return result;
        
    }
}
