// Optimised Solution TC: O(N) SC: O(1)
class Solution {
    public int longestContinuousSubstring(String s) {
        
        // Handling Edge Cases
        if(s.length() == 0){
            return 0;
        }
        
        // Handling Edge Cases
        if(s.length() == 1){
            return 1;
        }
        
        // Taking 2 Pointers -> Front Being 1 Ahead Of Rear
        // We Use A Sliding Window Of Gap 1 To Check Current And Next Character
        int front = 1;
        int rear = 0;
        
        // Since We Now Know After The Edge Cases Being Handled, That There Will Be More Than 1 Character
        // We Can Iterate Over Characters. We Start Count With 1 As We Take The Frequency Of Current Character In The Sum Count
        // count Will Store The Value Of Length On Every Iteration
        // maxCount Will Store The Maximum Length
        int maxCount = 1;
        int count = 1;
        
        // Iterating With A Sliding Window Of Gap 1
        while(front < s.length()){
            // If CurrentChar + 1 Equals Next Char, Then We Increment Count
            if(s.charAt(rear) + 1 == s.charAt(front)){
                count++;
                rear++;
                front++;
                maxCount = Math.max(maxCount, count); // Storing The Max Length Reached By count In maxCount
            }
            // Else We Reset Count
            else{
                rear = front;
                front++;
                count = 1;
            }
        }
        
        // Returning The maxCount -> maxLength Substring Found
        return maxCount;
        
    }
}



//Another Approach Using Stack TC: O(N) SC: O(N)
class Solution {
    public int longestContinuousSubstring(String s) {
        int len = s.length();
		int maxLongest = 1, result = 1;
		Stack<Character> stack = new Stack<>();
		stack.add(s.charAt(0));
		for (int i = 1; i < len; i++) {
			char ch = s.charAt(i);
			if((ch-'0') - (stack.peek()-'0')  == 1) {
				maxLongest++;
				if(maxLongest > result) {
					result = maxLongest;
				}
			}else {
				maxLongest = 1;
			}
            stack.pop();
			stack.add(s.charAt(i));
		}
		return result;
    }
}



// Brute Force Solution TC: O(n2) SC: O(1)
class Solution {
    public int longestContinuousSubstring(String s) {
        
        // If String Length Is 0, We Return 0
        if(s.length() == 0){
            return 0;
        }
        
        // If String Length Is 1, Then We Return 1
        if(s.length() == 1){
            return 1;
        }
        
        // With Edge Cases Covered, We Assume The Max Count As 1
        int maxCount = 1;
        
        // Traversing Through The Outer Loop
        for(int i=0; i<s.length() - 1; i++){
            int count = 1;
            char ch = s.charAt(i);
            
            // Simple Checking The Current Char + 1 With The Next Char
            // In Case It Equals, We Increment Count, Else We Break From The Inner Loop
            for(int j= i+1; j<s.length(); j++){
                if(ch + 1 == s.charAt(j)){
                    count++;
                    ch = s.charAt(j);
                }else{
                    break;
                }
            }
            
            // Updating maxCount
            maxCount = Math.max(count, maxCount);
        }
        
        // Returning Result
        return maxCount;
        
    }
}
