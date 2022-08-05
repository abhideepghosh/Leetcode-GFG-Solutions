class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode res = new ListNode(0);
        ListNode temp = res;
        int carry = 0;
        while(l1 != null || l2 != null){
            int l1_val = (l1 != null) ? l1.val : 0;
            int l2_val = (l2 != null) ? l2.val : 0;
            int currSum = l1_val + l2_val + carry;
            
            carry = currSum/10;
            
            int lastDigit = currSum%10;
            
            ListNode newListNode = new ListNode(lastDigit);
            temp.next = newListNode;
            temp = temp.next;
            
            if(l1 != null){
                l1 = l1.next;
            }
            
            if(l2 != null){
                l2 = l2.next;
            }
            
        }
        
        if(carry > 0){
            ListNode newListNode = new ListNode(carry);
            temp.next = newListNode;
        }
        
        return res.next;
        
    }
}
