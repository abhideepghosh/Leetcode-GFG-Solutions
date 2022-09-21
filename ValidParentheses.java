// Optimized Solution TC: O(N) SC: O(N)
class Solution {
    public boolean isValid(String s) {
        
        // For Processing The String
        Stack<Character> stack = new Stack<>();
        
        // Iterating Through The String Char By Char
        for (char ch : s.toCharArray()) {
            
            // For Any Opening Brackets, We Add The Char To The Stack
            if(ch == '(' || ch == '{' || ch == '['){
                stack.push(ch);
            }
            
            // If Stack Is Not Empty, We Check For Closing Bracket At The Top Of The Stack
            else if (!stack.isEmpty()){
                
                // If We Find Any One Of The Opening Bracket At The Top For The Current Char, We Pop The Element Out
                if(((stack.peek() == '(' && ch == ')') ||
				        (stack.peek() == '{' && ch == '}') || 
				                (stack.peek() == '[' && ch == ']'))){
                    stack.pop();
                }
                
                // Else We Return False
                else{
                    return false;
                }
            }
            // If The Stack Is Empty Even Though We Have A Character Which Will Be A Closing Bracket, Then We Return False
            else{
                return false;    
            }   
            
        }
        
        // If Stack Is Empty, We Return True, Else False
        return stack.isEmpty();
        
    }
}
