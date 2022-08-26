class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        // HashSet Used To Store Unique Characters
        HashSet<Character> set = new HashSet<>();
        
        //2 Pointers Defined
        int stablePointer = 0;
        int unstablePointer = 0;
        
        // To Store The Maximum Length Of Unique Characters In The HashSet
        int maxSize = 0;
        
        // 2 Pointer Method: Window - Unique Characters Between The Stable And Unstable Pointers
        while(unstablePointer < s.length()){
            
            // If The Character Is Not Present In The HashSet, Then We Add It
            // If Present Then We Delete Its Previous Occurence
            if(!set.contains(s.charAt(unstablePointer))){
                set.add(s.charAt(unstablePointer));
                unstablePointer++;
            }else{
                set.remove(s.charAt(stablePointer));
                stablePointer++;
            }
            
            // Keeping Track Of The Maximum Length Reached In The HashSet At Every Iteration
            if(maxSize < set.size()){
                maxSize = set.size();
            }
            
        }
        
        // Returning Max Size Of The HashSet Reached During The Iterations
        return maxSize;
    }
}
