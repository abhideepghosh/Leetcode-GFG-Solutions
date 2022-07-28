class Solution {
    public int strStr(String haystack, String needle) {
        if(haystack.isEmpty() || needle.isEmpty()){
            return 0;
        }
        if(needle.length() > haystack.length()){
            return -1;
        }
        if(needle.length() == haystack.length() && haystack.equals(needle) == true){
            return 0;
        }
        if(haystack.contains(needle)){
            return haystack.indexOf(needle);
        }
        return -1;
    }
}
