class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        String str1 = "";
        String str2 = "";
        for(String s : word1){
            str1 += s;
        }
        for(String s : word2){
            str2 += s;
        }
        return str1.equals(str2);
    }
}
