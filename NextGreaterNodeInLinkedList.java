// TC: O(N*N) SC: O(N)
class Solution {
    public int[] nextLargerNodes(ListNode head) {
        
        // Insert Values Of Nodes In An ArrayList
        ArrayList<Integer> nodeValues = new ArrayList<>();
        
        // Stack For Processing The Result
        Stack<Integer> stack = new Stack<>();
        
        while(head != null){
            // Adding Node Values To The List
            nodeValues.add(head.val);
            // Traversing Through The Linked List
            head = head.next;
        }
        
        // Defining The Result Array
        int[] result = new int[nodeValues.size()];
        
        // Traversing Through The ArrayList
        for(int i=0; i<nodeValues.size(); i++){
            
            // The Value From Stack Is Popped Till Current Element At ith Index Is Greater Than The Top Element Of The Stack
            // For The Values Of Indexes Not Popped From The Stack, The Default Value Of Array At Those Index Is 0
            while(!stack.isEmpty() && nodeValues.get(stack.peek()) < nodeValues.get(i)){
                result[stack.pop()] = nodeValues.get(i);
            }
            
            // Pushing Index Into The Stack
            stack.push(i);
            
        }
        
        // Returning The Result
        return result;
        
    }
}
