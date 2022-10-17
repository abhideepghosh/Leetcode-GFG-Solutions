/*
Runtime: 1 ms, faster than 98.24% of Java online submissions for Happy Number.
Memory Usage: 39.6 MB, less than 88.34% of Java online submissions for Happy Number.
*/
// Optimised Solution TC: O(logN) SC: O(1)
class Solution {
    public boolean isHappy(int n) {
        
        int stableSpeed = n;
        int unstableSpeed = breakAndSquare(n);
        // Iterating Till n Becomes Equal To 1
        // In Case A Previous Value Repeats (stableSpeed == unstableSpeed), That Means We Are Stuck In A Cycle
        // Hence This Number Is Not A Happy Number
        while(unstableSpeed != 1 && stableSpeed != unstableSpeed){
            
            stableSpeed = breakAndSquare(stableSpeed);
            unstableSpeed = breakAndSquare(breakAndSquare(unstableSpeed));
            
        }
        
        // If Loop Terminated On unstableSpeed == 1, We Return True, Else, False
        return (unstableSpeed == 1);
        
    }
    
    // This Function Breaks The Number, Squares The Number And Then Adds Them
    public int breakAndSquare(int n){
        
        // For Storing Result
        int totalSum = 0;
        
        // Squaring The Last Digit Of The Number And Adding It To Total Sum
        // Then We Remove The Last Digit From n
        while(n > 0){
            totalSum += (n%10) * (n%10);
            n = n/10;
        }
        
        // Returning The Answer;
        return totalSum;
        
    }
    
}



/*
Runtime: 1 ms, faster than 98.24% of Java online submissions for Happy Number.
Memory Usage: 39.6 MB, less than 88.34% of Java online submissions for Happy Number.
*/
// Dynamic Programming Tabulation TC: O(logN) SC: O(N)
class Solution {
    public boolean isHappy(int n) {
        
        // For Storing Result At Every Iteration
        HashSet<Integer> dp = new HashSet<>();
        
        // Iterating Till n Becomes Equal To 1
        while(n != 1){
            
            // In Case A Previous Value Repeats, That Means We Are Stuck In A Cycle
            // Hence This Number Is Not A Happy Number
            if(dp.contains(n)){
                return false;
            }else{
                // Adding The Current Value Of n
                dp.add(n);
            }
            
            // Breaking, Squaring And Adding The Number
            n = breakAndSquare(n);
            
        }
        
        // If This Condition Is Reached That Means The While Loop Stopped, Hence n == 1
        // So We Return True
        return true;
        
    }
    
    // This Function Breaks The Number, Squares The Number And Then Adds Them
    public int breakAndSquare(int n){
        
        // For Storing Result
        int totalSum = 0;
        
        // Squaring The Last Digit Of The Number And Adding It To Total Sum
        // Then We Remove The Last Digit From n
        while(n > 0){
            totalSum += (n%10) * (n%10);
            n = n/10;
        }
        
        // Returning The Answer;
        return totalSum;
        
    }
    
}
