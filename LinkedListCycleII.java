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
public class Solution {
    public ListNode detectCycle(ListNode head) {
        
        ListNode constant = head;
        ListNode fast = head;
        ListNode entry = head;
        
        
        if(head == null || head.next ==null){
            return null;
        }
        
        
        while(fast.next!=null && fast.next.next!=null){
            constant = constant.next;
            fast = fast.next.next;
            if(constant == fast){
                while(constant != entry){
                    entry = entry.next;
                    constant = constant.next;
                }
                return entry;
            }
        }
        
        return null;
        

        
    }
}
