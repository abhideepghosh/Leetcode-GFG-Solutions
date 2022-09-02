/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Reverse Linked List.
Memory Usage: 41.9 MB, less than 95.60% of Java online submissions for Reverse Linked List.
*/

// Optimized Solution TC: O(n) SC: O(1)
class Solution {
    public ListNode reverseList(ListNode head) {
        
        // We Define previousNode To Store The Final Head Of The Reversed Linked List
        ListNode previousNode = null;
        // We Use traverseNode To Traverse Through The Linked List
        ListNode traverseNode = head;
        
        /*
        Approach
         1. We store the next of the current node in traversal in a ListNode.
         2. This is to not loose reference to the next node.
         3. We point the next of the current Node to the previous node.
         4. We assign the current node value to the previous node.
         5. Finally, we point the current node in traversal to the next stored node.
        */
        while(traverseNode != null){
            
            ListNode next = traverseNode.next;
            traverseNode.next = previousNode;
            previousNode = traverseNode;
            traverseNode = next;
            
        }
        
        // Returning The Head Of The Reversed Linked List
        return previousNode;
    }
}
