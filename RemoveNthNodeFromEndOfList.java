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
// Calculate Size Method : 100% Faster
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


//One Loop Method: 100% Faster
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        
        int index = 1;
        
        ListNode traverseNode = head;
        ListNode deleteNode = head;
        
        while(traverseNode.next != null){
            
            traverseNode = traverseNode.next;
            index++;
            
            if(index > n + 1){
                deleteNode = deleteNode.next;
            }
            
        }
        
        if(index < n + 1){
            return head.next; 
        }
        
        deleteNode.next = deleteNode.next.next;
        
        return head;
        
    }
}


// Two Pointer Method : 100% Faster
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode aheadPointer = head;
        ListNode backPointer = head;
        
        while(n >= 0 && aheadPointer != null){
            aheadPointer = aheadPointer.next;
            n--;
        }
        
        if(n >= 0){
            return head.next;
        }
        
        while(aheadPointer != null){
            aheadPointer = aheadPointer.next;
            backPointer = backPointer.next;
        }
        
        backPointer.next = backPointer.next.next;
        
        return head;
    }
}
