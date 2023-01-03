class Solution {
    
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        generateParenthesis(result, "", 0, 0, n);
        return result;
    }
    
    void generateParenthesis(List<String> result, String s, int open, int close, int max){
        if(s.length() == max * 2){
            result.add(s);
            return;
        }    
        
        if(open < max) generateParenthesis(result, s + "(", open + 1, close, max);
        if(close < open) generateParenthesis(result, s + ")", open, close + 1, max);
        
    }
    
}
