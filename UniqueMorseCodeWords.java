// Optimised Solution
/*
Runtime: 2 ms, faster than 99.55% of Java online submissions for Unique Morse Code Words.
Memory Usage: 40.2 MB, less than 97.52% of Java online submissions for Unique Morse Code Words.
*/
class Solution {
    public int uniqueMorseRepresentations(String[] words) {
        String[] MORSE = new String[]{".-","-...","-.-.","-..",".","..-.","--.",
                         "....","..",".---","-.-",".-..","--","-.",
                         "---",".--.","--.-",".-.","...","-","..-",
                         "...-",".--","-..-","-.--","--.."};
        HashSet<String> set = new HashSet<>();
        for(String word : words){
            StringBuilder str = new StringBuilder();
            for(char c : word.toCharArray()){
                str.append(MORSE[c - 'a']);
            }
            set.add(str.toString());
        }
        return set.size();
    }
}

/*
// Brute Force Solution
class Solution {
    public int uniqueMorseRepresentations(String[] words) {
        HashMap<Character, String> map = new HashMap<>();
        map.put('a', ".-");
        map.put('b', "-...");
        map.put('c', "-.-.");
        map.put('d', "-..");
        map.put('e', ".");
        map.put('f', "..-.");
        map.put('g', "--.");
        map.put('h', "....");
        map.put('i', "..");
        map.put('j', ".---");
        map.put('k', "-.-");
        map.put('l', ".-..");
        map.put('m', "--");
        map.put('n', "-.");
        map.put('o', "---");
        map.put('p', ".--.");
        map.put('q', "--.-");
        map.put('r', ".-.");
        map.put('s', "...");
        map.put('t', "-");
        map.put('u', "..-");
        map.put('v', "...-");
        map.put('w', ".--");
        map.put('x', "-..-");
        map.put('y', "-.--");
        map.put('z', "--..");
        
        HashSet<String> set = new HashSet<>();
        
        
        for(String word : words){
            StringBuilder str = new StringBuilder();
            for(char c : word.toCharArray()){
                str.append(map.get(c));
            }
            set.add(str.toString());
        }
        return set.size();
    }
}
*/
