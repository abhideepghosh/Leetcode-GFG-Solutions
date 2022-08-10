class Solution {
    public int firstUniqChar(String s) {
        int[]count=new int[26];
        for(int i=0;i<s.length();i++){
            count[s.charAt(i)-'a']++;
        }
        for(int i=0;i<s.length();i++){
            if(count[s.charAt(i)-'a']==1) return i;
        }
        return -1;
    }
}

// class Solution {
//     public int firstUniqChar(String s) {
//         HashMap<Character, Integer> map = new HashMap<Character, Integer>();
//         for(int i=0 ; i<s.length(); i++){
//             if(!map.containsKey(s.charAt(i))){
//                 map.put(s.charAt(i), 1);
//             }else{
//                 map.put(s.charAt(i), 2);
//             }
//         }
//         for(int i = 0; i < s.length(); i++){
//             char ch = s.charAt(i);
//             if(map.containsKey(ch) && (map.get(ch) == 1)){
//                 return i;
//             } 
//         }
        
//         return -1;
//     }
        
    
// }
