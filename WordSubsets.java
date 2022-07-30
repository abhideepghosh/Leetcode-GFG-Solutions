class Solution {
    public List<String> wordSubsets(String[] words1, String[] words2) {
        List<String> list = new ArrayList<>();
        int[] maxFrequency = new int[26];
        for(int i = 0; i < words2.length; i++){
            int[] charCountWords2 = frequencies(words2[i]);
            for(int j=0; j<26; j++){
                maxFrequency[j] = Math.max(maxFrequency[j], charCountWords2[j]);   
            }
        }
        
        for(int i=0; i<words1.length; i++){
            boolean flag = true;
            int[] wordFrequency = frequencies(words1[i]);
            for(int j=0; j<26; j++){
                if(maxFrequency[j] > wordFrequency[j]){
                    flag = false;
                    break;
                }
            }
            if(flag == true){
                list.add(words1[i]);
            }
        }
        
        return list;
        
    }
    
    public static int[] frequencies(String s){
        int[] result = new int[26];
        for(char c : s.toCharArray()){
            result[c - 'a']++;
        }
        
        return result;
        
    }
    
}
