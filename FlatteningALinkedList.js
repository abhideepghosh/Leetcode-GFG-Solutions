// I coded an Iterative solution for this problem recently. It saves stack space.
// TC:O(N^2) SC: O(1)
/*
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
    this.bottom = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {Node}
 */

class Solution {
    flatten(root) {
        const merge = (l1, l2) => {
            const result = new Node(0);
            let resultPointer = result;
            while(l1 && l2) {
                if(l1.data < l2.data) {
                    resultPointer.bottom = l1;
                    l1 = l1.bottom;
                }
                else {
                    resultPointer.bottom = l2;
                    l2 = l2.bottom;
                }
                resultPointer = resultPointer.bottom;
            }
            if(l1) {
                resultPointer.bottom = l1;
            }
            if(l2) {
                resultPointer.bottom = l2;
            }
            return result.bottom;
        }
        // code here
        let result = root;
        while(root.next) {
            result = merge(result, root.next);
            root = root.next;
        }
        return result;
    }
}



/**
 * @param {Node} head
 * @return {Node}
*/

class Solution {
    
    flatten(head)
    {
        //your code here
        /*
        Approach: Recursion
            1. Reach The Last 2 Nodes Of The Linked List.
            2. Merge Bottom Pointers Of the Linked List.
            3. Go To The Previous Recursion Stack.
            4. Merge The LinkedList With the Current Merged LinkedList
            5. Repeat till the first LinkedList Is Merged.
            6. Return The Linked List.
        */
        
        if(!head || !head.next) return head;
        
        let node = this.flatten(head.next);
        
        return this.merge(head, node);
        
    }
    
    merge(l1, l2) {
        let result = new Node(0);
        let resultPointer = result;
        
        while(l1 && l2) {
            if(l1.data < l2.data) {
                resultPointer.bottom = l1;
                resultPointer = resultPointer.bottom;
                l1 = l1.bottom;
            }
            else {
                resultPointer.bottom = l2;
                resultPointer = resultPointer.bottom;
                l2 = l2.bottom;
            }
        }
        if(l1) resultPointer.bottom = l1;
        if(l2) resultPointer.bottom = l2;
        
        return result.bottom;
    }
    
}
