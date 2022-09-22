// Optimized Solution TC: O(N) SC: O(1)
class Solution {
    public String removeOuterParentheses(String s) {
        
        // StringBuilder For Storing The Result
        StringBuilder str = new StringBuilder();
        
        // We Take Input Only When The depth Is Greater Than 1, Which Would Mean There Is An Outer Parenthesis
        // This Case Is Valid Because Of The Input String Already Being A Valid Parentheses String
        int depth = 0;
        
        // Iterating Through The String
        for(int i=0; i<s.length(); i++){
            
            // Increasing The Depth When We Find An Open Parentheses
            if(s.charAt(i) == '('){
                depth++;
            }
            
            // Appending The Character When The Depth > 1 Because Its Inside An Outer Parenthesis
            if(depth > 1){
                str.append(s.charAt(i));
            }
            
            // Decreasing The Depth When We Find A Close Parentheses
            if(s.charAt(i) == ')'){
                depth--;
            }
            
        }
        
        // Returning The Result
        return str.toString();
        
    }
}
