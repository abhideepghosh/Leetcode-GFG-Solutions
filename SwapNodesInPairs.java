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
Runtime: 0 ms, faster than 100.00% of Java online submissions for Swap Nodes in Pairs.
Memory Usage: 39.9 MB, less than 91.64% of Java online submissions for Swap Nodes in Pairs.
*/
class Solution {
    public ListNode swapPairs(ListNode head) {
        
        ListNode result = new ListNode(0);
        result.next = head;
        
        ListNode resultPointer = result;
        
        while(resultPointer.next != null && resultPointer.next.next != null){
           
            ListNode firstNode = resultPointer.next;
            ListNode secondNode = resultPointer.next.next;
            
            firstNode.next = secondNode.next;
            resultPointer.next = secondNode;
            
            resultPointer.next.next = firstNode;
            resultPointer = resultPointer.next.next;
            
        }
        
        return result.next;
        
    }
}
