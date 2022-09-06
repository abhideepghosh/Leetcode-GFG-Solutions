/*
Runtime: 35 ms, faster than 88.47% of Java online submissions for Sliding Window Maximum.
Memory Usage: 59.3 MB, less than 93.62% of Java online submissions for Sliding Window Maximum.
*/
// Optimized Solution TC: O(n) SC: O(k) // As Size Of The Deque Will Always Be k At Max.
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        
        // We Take The Result Array With The Size Of ArraySize - WindowSize + 1.
        int sizeOfArray = nums.length;
        int[] result = new int[sizeOfArray - k + 1];
        int Index = 0;
        
        // We Take Deque For The Purpose Of Removing Elements Both From The Front As Well As From The Rear.
        Deque<Integer> window = new ArrayDeque<>();
        
        // Whenever The Size Of Deque Becomes Greater Than The Window, We Pop Out Elements From The Front.
        // Whenever we Find A value Of Previous Element Greater Than The Current Element, We Pop Out The Previous Index.
        for(int i=0; i<sizeOfArray; i++){
            if(!window.isEmpty() && window.peek() == i-k){
                window.poll();
            }
            while(!window.isEmpty() && nums[window.peekLast()] < nums[i]){
                window.pollLast();
            }
            // Finally We Add The New Index To The Deque.
            window.add(i);
            // When i becomes Greater Than The Window Size, We Start Adding The Elements To The Result.
            if(i >= k - 1){
                result[Index++] = nums[window.peek()];
            }
        }
        
        // Returning The Final Result.
        return result;
    }
}
