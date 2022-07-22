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
class Solution {
    public ListNode middleNode(ListNode head) {
       
        ListNode midLink = head;
        ListNode runnerLink = head;
        
        while(midLink!=null && runnerLink != null 
              && midLink.next!=null && runnerLink.next != null){
            midLink = midLink.next;
            runnerLink = runnerLink.next.next;
        }
        
        return midLink;
        
    }
}
