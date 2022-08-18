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
