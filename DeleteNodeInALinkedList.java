/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Delete Node in a Linked List.
Memory Usage: 41.5 MB, less than 98.03% of Java online submissions for Delete Node in a Linked List.
*/

// Optimised TC: O(1) SC: O(1) 
class Solution {
    
    public void deleteNode(ListNode node) {
              
        // Making currentNode val equal to the nextNode val
        node.val = node.next.val;
        
        // Making The cuurentNode's Next Pointer To Point At Next Node's next Pointer
        node.next = node.next.next;
    }
    
}
