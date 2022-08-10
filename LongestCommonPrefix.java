/*
//Brute Force
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
*/
//Optimised O(logn) Approach
class Solution {
    public String longestCommonPrefix(String[] strs) {
                if (strs == null || strs.length == 0) {
            return "";
        }
        StringBuilder result = new StringBuilder();
        Arrays.sort(strs);
        char[] first = strs[0].toCharArray();
        char[] last = strs[strs.length - 1 ].toCharArray();
        for (int i = 0; i < first.length && i < last.length; i++) {
            if (first[i] == last[i]) {
                result.append(first[i]);
            }
            else
                return result.toString();
        }
        return result.toString();
    }
}
