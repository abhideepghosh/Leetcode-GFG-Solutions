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
Runtime: 2 ms, faster than 99.46% of Java online submissions for Add Two Numbers.
Memory Usage: 42.5 MB, less than 89.13% of Java online submissions for Add Two Numbers.
*/

// Optimized Solution TC: O(n) SC: O(1)
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        
        // Taking Pointers To Start Of Both The Lists
        ListNode l1Pointer = l1;
        ListNode l2Pointer = l2;
        
        // Creating A New Node For Storing The Sum
        ListNode head = new ListNode(0);
        
        // Creating Pointer To The head
        ListNode currentNode = head;
        int carry = 0;
        
        // Iterating Till All 3 Conditions Satisfy
        while(l1Pointer != null || l2Pointer != null || carry !=0){
            
            // Taking Values As Input Till List Hits Null And If The Loop Still Continues To Run THen We Take 0 as Input
            int l1Value = (l1Pointer != null) ? l1Pointer.val : 0;
            int l2Value = (l2Pointer != null) ? l2Pointer.val : 0;
            
            // Calculating Sum
            int sum = l1Value + l2Value + carry;
            
            // Calculating Last Digit
            int lastDigit = sum%10;
            
            // Calculating Carry
            carry = sum/10;
            
            // Storing Last Digit In A Node And Adding It To The Answer
            ListNode lastDigitNode = new ListNode(lastDigit);
            currentNode.next = lastDigitNode;
            currentNode = currentNode.next;
            
            // Base Iterations
            if(l1Pointer != null){
                l1Pointer = l1Pointer.next;
            }
            if(l2Pointer != null){
                l2Pointer = l2Pointer.next;
            }
            
        }
        
        // Returning The Final Result
        return head.next;
        
    }
}
