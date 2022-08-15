/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Backspace String Compare.
Memory Usage: 40.5 MB, less than 93.18% of Java online submissions for Backspace String Compare.
*/
// Optimized Solution TC: O(n) SC: O(1)
/*
TC: O(n) Explanation:
    1. Because length of the String cannot be more than 200 as per the Question Constraints.
    2. Hence, all the inner loops have a constant Time Complexity
*/
class Solution {
    public boolean backspaceCompare(String s, String t) {
        int i = s.length()-1;
        int j = t.length()-1;
        int hashCountS = 0;
        int hashCountT = 0;
        while(i>=0 || j >=0){
            while(i >= 0){
                if(s.charAt(i) == '#'){
                    hashCountS++;
                    i--;
                }else if(hashCountS >0){
                    hashCountS--;
                    i--;
                }else{
                    break;
                }
            }
            while(j >= 0){
                if(t.charAt(j) == '#'){
                    hashCountT++;
                    j--;
                }else if(hashCountT >0){
                    hashCountT--;
                    j--;
                }else{
                    break;
                }
            }
            if(i >= 0 && j >= 0 && s.charAt(i) != t.charAt(j)){
                return false;
            }
            if((i >= 0) != (j>=0)){
                return false;
            }
            i--;
            j--;
        }
        return true;
    }
}

/*
//Brute Force TC: O(n) SC: O(n)
class Solution {
    public boolean backspaceCompare(String s, String t) {
        return buildString(s).equals(buildString(t));
    }
    
    public String buildString(String s){
        LinkedList<Character> list = new LinkedList<>();
        for(char c : s.toCharArray()){
            if(c!='#')
                list.add(c);
            else if(!list.isEmpty())
                list.removeLast();
        }
        return String.valueOf(list);
    }
}
*/
