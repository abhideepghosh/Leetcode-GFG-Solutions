class Solution {
    public String longestCommonPrefix(String[] strs) {
        
        if(strs.length == 0){
            return "";
        }
        
        String finder = strs[0];
        for(int i=1; i<strs.length; i++){
            while(strs[i].indexOf(finder) !=0){
                finder = finder.substring(0, finder.length()-1);
            }
        }
        
        return finder;
    }
        
}
