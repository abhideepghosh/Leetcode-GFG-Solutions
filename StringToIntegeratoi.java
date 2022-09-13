class Solution {
    public int myAtoi(String str) {
        
        int index = 0, sign = 1, total = 0;
        
        //1. Empty String - Checking If Without Spaces, The String Becomes 0 In Length
        String s = str;
        s = s.replaceAll("\\s", "");
        if(s.length() == 0){
            return 0;
        }

        //2. Remove Spaces Only From The Beginning - If Character Is Anything Other Than ' ', The Loop Breaks
        while(str.charAt(index) == ' ' && index < str.length()){
            index++;
        }

        //3. Handle Signs
        if(str.charAt(index) == '+' || str.charAt(index) == '-'){
            // If +, Then sign Remains 1, else We Change It To -1
            sign = str.charAt(index) == '+' ? 1 : -1;
            index++;
        }

        //4. Convert Number And Avoid Overflow
        while(index < str.length()){
            
            // Converting Character To Digit If the Number Is A Digit In Char Form
            int digit = str.charAt(index) - '0';
            if(digit < 0 || digit > 9){
                break;
            }

            //Check If Total Will Be Overflow After 10 Times And Add Digit
            if(Integer.MAX_VALUE/10 < total || Integer.MAX_VALUE/10 == total && Integer.MAX_VALUE %10 < digit){
                return (sign == 1) ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            
            // Appending the Number To Total
            total = 10 * total + digit;
            index++;
        }
        
        // Returning The Value
        return total * sign;
        
    }
}
