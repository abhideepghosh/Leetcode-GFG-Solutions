/*
Runtime: 3 ms, faster than 96.35% of Java online submissions for Next Greater Element I.
Memory Usage: 42 MB, less than 98.89% of Java online submissions for Next Greater Element I.
*/

// Optimised Solution TC: O(n^2) SC: O(n)
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        
        // We Store The Values Of Element And Its Next Greater Element In The HashMap
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // We Use Stack To Use LIFO Property In Filling The HashMap
        Stack<Integer> stack = new Stack();
        
        // Iterating Through nums2
        // Fiiling The Map Using Stack
        for(int num :nums2){
            // For Every Element That Is Smaller Than Current Element, We Pop Its Value With The Element On Stack As The Key
            while(!stack.isEmpty() && stack.peek() < num){
                map.put(stack.pop(), num);
            }
            
            // Pushing Current Element In The Stack
            stack.push(num);
        }
        
        // Iterating Through nums1 And Checking For Element In HashMap As Key And If It Has A Greater Value Or Not
        for(int i=0; i<nums1.length; i++){
            nums1[i] = map.getOrDefault(nums1[i], -1);
        }
        
        // Returning The Modified Array
        return nums1;
        
    }
}
