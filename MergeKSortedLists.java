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
// Brute Force TC: O(k*N) SC: O(1)
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        
        // Handling Edge Cases
        if(lists.length == 0){
            return null;
        }
        
        // Handling Edge Cases
        if(lists.length == 1){
            return lists[0];
        }
        
        // To Store Result
        ListNode result = lists[0];
        
        // Iterating Through The Array Of List Of Nodes
        for(int i=1; i<lists.length; i++){
            
            // Merging Current List With The Next List Present In The Array
            result = merge(result, lists[i]);
        }
        
        //Returning Merged Result
        return result;
        
    }
    
    // Merging Function
    public ListNode merge(ListNode l1, ListNode l2){
        
        // For Storing Final Result
        ListNode result = new ListNode(0);
        ListNode resultPointer = result;
        
        // Pointers To The Parameter Lists
        ListNode l1Pointer = l1;
        ListNode l2Pointer = l2;
        
        // Iterating Through The Lists And Applying Merge Similar To Merge Sort
        while(l1Pointer != null && l2Pointer != null){
            
            // Basic Conditions Of Merge Sort
            if(l1Pointer.val < l2Pointer.val){
                
               resultPointer.next = l1Pointer;
                l1Pointer = l1Pointer.next;
                resultPointer = resultPointer.next;
                
            }
            // Basic Conditions Of Merge Sort
            else{
                
                resultPointer.next = l2Pointer;
                l2Pointer = l2Pointer.next;
                resultPointer = resultPointer.next;
                
            }
            
        }
        
        // In Case The Elements Remain In Any One Of The List, We Simply Pointer The Next Of ResultPointer To It
        if(l1Pointer != null){
            resultPointer.next = l1Pointer;
        }
        
        if(l2Pointer != null){
            resultPointer.next = l2Pointer;
        }
        
        // Returning Merged Linked List
        return result.next;
        
    }
    
}
