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
// Optimised Solution TC: O(n) | SC: O(1)
class Solution {
    public boolean isPalindrome(ListNode head) {
        
        // Pointers To Traverse In A Linked List
        ListNode stablePointer = head;
        ListNode unstablePointer = head;
        
        // Making The stablePointer Reach Middle Of The Linked List
        while(unstablePointer != null && unstablePointer.next != null){
            stablePointer = stablePointer.next;
            unstablePointer = unstablePointer.next.next;
        }
        
        // Reversing The Linked List From Mid To End
        stablePointer = reverse(stablePointer);
        
        //Assigning the unstablePointer To The Begginning Of The Linked List
        unstablePointer = head;
        
        // Comparing the First Half And Second Reversed Half Of The Linked List
        while(stablePointer != null){
            if(stablePointer.val != unstablePointer.val){
                return false;
            }
            stablePointer = stablePointer.next;
            unstablePointer = unstablePointer.next;
        }
        return true;
    }
    
    // Function To Reverse A Linked List
    public ListNode reverse(ListNode head){
        
        ListNode previousNode = null;
        
        while(head != null){
            ListNode next = head.next;
            head.next = previousNode;
            previousNode = head;
            head = next;
        }
        return previousNode;
    }
    
}



// Brute Force Solution TC: O(n) | SC: O(1)
class Solution {
    public boolean isPalindrome(ListNode head) {
        
        // Handling Edge Cases
        if(head == null || head.next == null){
            return true;
        }
        
        ListNode traverseNode = head;
        int size = 0;
        
        // Calculating Size Of The Linked List
        while(traverseNode != null){
            traverseNode = traverseNode.next;
            size++;
        }
        
        //Finding The Mid Of The Linked List
        size = size/2;
        int n = size;
        
        traverseNode = head;
        
        while(size != 0){
            traverseNode = traverseNode.next;
            size--;
        }
        
        // Reversing The Linked List From The Mid To The End
        ListNode previousNode = null;
        
        while(traverseNode != null){
            ListNode next = traverseNode.next;
            traverseNode.next = previousNode;
            previousNode = traverseNode;
            traverseNode = next;
        }
        
        traverseNode = head;
        
        //Comparing The Values Of The First Half With The Second Half Of The Linked List
        while(n != 0){
            if(traverseNode.val != previousNode.val){
                return false;
            }
            traverseNode = traverseNode.next;
            previousNode = previousNode.next;
            n--;
        }
        return true;
    }
}
