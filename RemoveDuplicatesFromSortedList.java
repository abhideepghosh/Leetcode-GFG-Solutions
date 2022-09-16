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
// Optimised Solution TC: O(N) SC: O(1)
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        
        // Edge Case Covered
        if(head == null || head.next == null){
            return head;
        }
        
        // We Take 2 Pointers
        //  1. frontPointer Stays At The First Element Of The Duplicates
        //  2. rearPointer Goes To The Last Similar Element In The Sorted Linked List
        //  3. Then We Make The next Of frontPointer Point To rearPointer
        //  4. Then We Move The frontPointer To The RearPointer Position
        
        ListNode frontPointer = head;
        ListNode rearPointer = head.next;
        
        while(rearPointer != null){
            
            if(frontPointer.val == rearPointer.val){
                rearPointer = rearPointer.next;
            }else{
                frontPointer.next = rearPointer;
                frontPointer = rearPointer;
                rearPointer = rearPointer.next;
            }
            
        }
        
        // Following The Same Method For The Last Set Of Similar Elements Or In Case The Whole Array Is Filled With Same Elements
        frontPointer.next = rearPointer;
        
        // Returning The Modified Linked List As The Result
        return head;
        
    }
}
