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
    public boolean hasCycle(ListNode head) {
        
        if(head == null){
            return false;
        }
        
        ListNode stable = head;
        ListNode unstable = head.next;
        while(stable != unstable){
            if(stable.next == null || unstable.next == null || unstable.next.next == null){
                return false;
            }
            
            stable = stable.next;
            unstable = unstable.next.next;
            
        }
        
        return true;
        
    }
}
