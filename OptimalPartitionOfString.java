class Solution {
    public int partitionString(String s) {
        
        HashSet<Character> set = new HashSet<>();
        int count = 0;
        
        for(char c : s.toCharArray()){
            if(set.contains(c)){
                count++;
                set.clear();
                set.add(c);
            }else{
                set.add(c);
            }
        }
        
        count++;
        
        return count;
        
    }
}
