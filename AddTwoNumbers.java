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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode(0);
        ListNode head = result;
        int carry = 0;
        while(l1 != null || l2 !=null || carry != 0){
            int l1_val = (l1 != null)? l1.val : 0;
            int l2_val = (l2 != null)? l2.val : 0;
            
            int res = l1_val + l2_val + carry;
            
            carry = res/10;
            
            int lastDigit = res%10;
            
            ListNode digit = new ListNode(lastDigit);
            head.next = digit;
            head = head.next;
            if(l1 != null)
            l1 = l1.next;
            if(l2 != null)
            l2 = l2.next;
            
        }
        return result.next;
    }
}
