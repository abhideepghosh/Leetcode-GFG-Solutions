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
Runtime: 0 ms, faster than 100.00% of Java online submissions for Rotate List.
Memory Usage: 41.5 MB, less than 97.02% of Java online submissions for Rotate List.
*/

// Optimized Solution TC: O(N) SC: O(1)
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        
        // Edge Cases
        if(head == null || head.next == null || k == 0){
            return head;
        }
        
        // In This Calculated Window, Will We Rotate The Linked List Nodes
        int window = 1;
        
        // Pointer Node To Traverse
        ListNode traverseNode = head;
        
        // Calculating The Window
        while(traverseNode.next != null){
            traverseNode = traverseNode.next;
            window++;
        }
        
        // Creating A Circular Linked List
        traverseNode.next = head;
        
        // Handling Edge Case Where k > Length Of The Linked List
        int rotation = k % window;
        
        //Number Of Nodes We Have To Skip Before Reaching The Node To Rotate
        int skipingNodes = window - rotation;
        
        // Pointer To Point The Old Head To
        ListNode newHead = head;
        
        // Skipping Nodes
        while(skipingNodes-- > 1){
            newHead = newHead.next;
        }
        
        // Breaking The Circular Linked List And Making Its Head Start From The Rotated Noddes
        head = newHead.next;
        newHead.next = null;
        
        // Returning The Modified Head
        return head;
        
    }
}
