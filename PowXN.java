//  Optimized Solution TC: O(logn)
/* 
    Time Complexity Will Be O(logn) because for every even power the loop will run for power/2 times
    And For every odd value the power becomes power - 1 which turns it into even which again runs for power/2 times.
    
    Approach:
    1. We check if the power is even or not.
    2. In case its even, then we divide the power by 2 and multiply the value of x with itself.
        2.1. Example : 2^16 can be written as ( (2*2)^(16/2) ) 4^8.
    3. In case its odd, then we subtract 1 from the power and add the number x to the result.
        3.1 Example 2^5 can be written as 2 * 2^4 where we are keeping 2^4 and adding the remaining 2 to the result.
    4. We keep repeating the steps from 1 to 3 until the copyOfPower becomes Zero in which case we return the result.
    5. We take the absolute value of Power into copyOfPower with which we complete the loop.
    6. Then we check if the power was negative then we convert the result to 1/result else we simply return the result.
*/

class Solution {
    public double myPow(double x, int n) {
        
        // We Make The copyOfPower Long So That In Case We Turn The Power Of Integer.MIN.VALUE To Positive
        // This is Because Integer.MIN_VALUE Will OverFlow If Converted To Positive.
        long copyOfPower = n;
        double result = 1.0;
        
        if(copyOfPower < 0){
            //Convert The copyOfPower To Positive
            copyOfPower *= -1;
        }
        
        // Calculating The Result Till Copy Of Power Becomes 0
        while(copyOfPower > 0){
            if(copyOfPower %2 == 1){
                result *= x;
                copyOfPower -= 1;
            }else{
                x *= x;
                copyOfPower /= 2;
            }
        }
        
        // If Power Is Negative We Change The result to 1/result
        if(n < 0){
            result = (double)(1.0/result);
        }
        
        // Returning The Result
        return result;
        
    }
}



// Recursive Approach
/*
Runtime: 1 ms, faster than 88.41% of Java online submissions for Pow(x, n).
Memory Usage: 42.6 MB, less than 60.91% of Java online submissions for Pow(x, n).
*/
class Solution {
    public double myPow(double x, int n) {
        
        return power(x, n);
        
    }
    
    // Using A Seperate Function To Avoid Integer Overflow
    public double power(double x, long n){
        if(n == 0){
            return 1;
        }
        
        if(n < 0){
            n = -n;
            x = 1 / x;
        }
        
        return (n % 2 == 0) ? power(x * x, n / 2) : x * power(x * x, n / 2);
        
    }
    
}
