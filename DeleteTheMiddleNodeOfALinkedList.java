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

// Brute Force Solution : Calculate Size TC: O(n) SC: O(1)
class Solution {
    public ListNode deleteMiddle(ListNode head) {
        
        // Edge Case
        if(head.next == null){
            return head.next;
        }
        
        // Variable size To Calculate Size
        ListNode traverseNode = head;
        int size = 0;
        
        // Calculating Size
        while(traverseNode != null){
            traverseNode = traverseNode.next;
            size++;
        }
        
        // Size Upto Mid Point
        size = size/2;
        
        traverseNode = head;
        
        // Running Loop Till TraverseNode Is Pointing To The Node Just Before The Mid Node 
        while(size > 1){
            traverseNode = traverseNode.next;
            size--;
        }
        
        // Delete Node
        traverseNode.next = traverseNode.next.next;
        
        // Returning The Modified Linked List
        return head;
        
    }
}
