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
    public ListNode reverseBetween(ListNode head, int left, int right) {
        if(head == null){
            return null;
        }
        ListNode currentNode = head;
        ListNode previousNode = null;
        while(left > 1){
            previousNode = currentNode;
            currentNode = currentNode.next;
            left--;
            right--;
        }
        ListNode connection = previousNode;
        ListNode tail = currentNode;
        ListNode prev = null;
        
        while(right-- > 0){
            ListNode temp = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = temp;
        }
        
        if(connection != null){
            connection.next = prev;
        }else{
            head = prev;
        }
        
        tail.next = currentNode;
        
        return head;
        
    }
}
