class Solution {
    //Function to find intersection point in Y shaped Linked Lists.
    intersectPoint(head1, head2)
    {
        //your code here
        let headA = head1;
        let headB = head2;
        
        while(headA !== headB) {
            if(headA) headA = headA.next;
            else headA = head2;
            if(headB) headB = headB.next;
            else headB = head1;
        }
        return headA ? headA.data : -1;
    }
}
