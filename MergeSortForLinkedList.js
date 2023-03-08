//User function Template for javascript

/**
 * @param {Node} head
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to sort the given linked list using Merge Sort.
    merge(l1, l2) {
        let result = new Node(0);
        let resultPointer = result;
        while(l1 && l2) {
            if(l1.data < l2.data) {
                resultPointer.next = l1;
                l1 = l1.next;
            }
            else {
                resultPointer.next = l2;
                l2 = l2.next;
            }
            resultPointer = resultPointer.next;
        }
        if(l1) resultPointer.next = l1;
        if(l2) resultPointer.next = l2;
        return result.next;
    }
    mergeSort(head)
    {
        //your code here
        if(!head || !head.next) return head;
        let slow = head, mid = head, fast = head;
        while(fast && fast.next) {
            slow = mid;
            mid = mid.next;
            fast = fast.next.next;
        }
        slow.next = null;
        let left = this.mergeSort(head);
        let right = this.mergeSort(mid);
        return this.merge(left, right);
    }
}
