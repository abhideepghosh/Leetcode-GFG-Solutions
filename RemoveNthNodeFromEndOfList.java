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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        
        ListNode traverseNode = head;
        int size = 0;
        
        
        while(traverseNode != null){
            size++;
            traverseNode = traverseNode.next;
        }
        
        if(size == n){
            return head.next;
        }
        
        traverseNode = head;
        size = size - n-1;
        
        
        while(traverseNode != null){
            if(size == 0){
                traverseNode.next = traverseNode.next.next;
                break;
            }
            traverseNode = traverseNode.next;
            size--;
        }
        
        return head;
        
    }
}
