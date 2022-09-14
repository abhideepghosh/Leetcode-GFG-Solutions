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
Runtime: 4 ms, faster than 96.55% of Java online submissions for Delete the Middle Node of a Linked List.
Memory Usage: 63.3 MB, less than 93.17% of Java online submissions for Delete the Middle Node of a Linked List.
*/
// Optimized Solution TC: O(n) SC: O(1)
class Solution {
    public ListNode deleteMiddle(ListNode head) {
        
        // Edge Cases Covered
        if(head.next == null){
            return head.next;
        }
        
        // StablePointer To Be Moved At Constant Speed
        ListNode stablePointer = head;
        
        // UnstablePointer To Be Moved At Fast Speed (.next.next)
        ListNode unstablePointer = head;
        
        // EntryPointer To Be Moved At Constant Speed But Will Stay Just Behind The StablePointer
        ListNode entryPointer = null;
        
        while(unstablePointer != null && unstablePointer.next != null){
            entryPointer = stablePointer;
            stablePointer = stablePointer.next;
            unstablePointer = unstablePointer.next.next;
        }
        
        // Delete The Next Node
        entryPointer.next = entryPointer.next.next;
        
        // Return Head
        return head;
    }
}


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
