//Sliding Window
class Solution {
    public int longestContinuousSubstring(String s) {
        // abcaba
        int left=0,right=0;
        int max=1;  // min answer will be 1
        int start=s.charAt(right)-'0';   // find the initial value of the character
        right++; 
        int next=start+1;  // to find out what should be the next value.
          
		  // start of sliding window logic
        while(right<s.length()){
            
            int current=s.charAt(right)-'0'; 
            
			// if this satisfy then it should be part of consecutive substring 
            if(current==next) {
                next++; 
                max=Math.max( max, right-left+1);
            }else{
			// start again with new current value.
                left=right;
                next=current+1;
            }
            right++;
        }
        
        return max;
    }
}



//Using Stack
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
