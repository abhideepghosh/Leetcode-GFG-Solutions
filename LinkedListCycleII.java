/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Linked List Cycle II.
Memory Usage: 42.3 MB, less than 99.03% of Java online submissions for Linked List Cycle II.
*/
// Optimized Solution TC: O(N) SC: O(1)
public class Solution {
    public ListNode detectCycle(ListNode head) {
        
        // Handing Edge Cases
        if(head == null || head.next == null){
            return null;
        }
        
        // For Traversing The Linked List In Constant Speed
        ListNode stablePointer = head;
        
        // For Traversing The Linked List In Fast Speed
        ListNode unstablePointer = head;
        
        // For Finding The Cycle
        ListNode entry = head;
        
        // Checking Fast Pointer -> In Case It Hits Null, We Return Null
        while(unstablePointer.next != null && unstablePointer.next.next != null){
            
            // Traversing At Constant Speed
            stablePointer = stablePointer.next;
            
            // Traversing At Faster Speed
            unstablePointer = unstablePointer.next.next;
            
            // If The Stable And Unstable Pointer Meet At Any Point
            // We Start A Node From Head At The Same Speed As The Stable Pointer
            if(stablePointer == unstablePointer){
                
                // They Will Meet At The Cycle Node According To The Floyds Cycle Finding Algorithm
                while(stablePointer != entry){
                    
                    // Traversing At Constant Speed
                    stablePointer = stablePointer.next;
                    entry = entry.next;
                    
                }
                
                // Returning The Node Where The Cycle Starts
                return stablePointer;
                
            }
            
        }
        
        // Returning Default Null
        return null;
        
    }
}
