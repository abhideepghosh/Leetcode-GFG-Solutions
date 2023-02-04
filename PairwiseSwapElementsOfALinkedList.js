/**
 * @param {Node} node
 * @return {Node} node
*/


/*
  Pairwise swap a linked list
  The input list will have at least one element
  node is defined as

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    pairWiseSwap(head)
    {
        //your code here
        let result = new Node(0);
        let resultPointer = result;
        resultPointer.next = head;
        while(resultPointer.next && resultPointer.next.next) {
            let firstNode = resultPointer.next;
            let secondNode = resultPointer.next.next;
            firstNode.next = secondNode.next;
            secondNode.next = firstNode;
            resultPointer.next = secondNode;
            resultPointer = resultPointer.next.next;
        }
        return result.next;
    }
}
