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
    //Function to sort a linked list of 0s, 1s and 2s.
    segregate(head)
    {
        //your code here
        let count0 = 0;
        let count1 = 0;
        let count2 = 0;
        let traverseNode = head;
        while(traverseNode) {
            if(traverseNode.data === 0) count0++;
            else if(traverseNode.data === 1) count1++;
            else count2++;
            traverseNode = traverseNode.next;
        }
        let result = new Node(0);
        let resultPointer = result;
        for(let i=0; i<count0; i++) {
            resultPointer.next = new Node(0);
            resultPointer = resultPointer.next;
        }
        for(let i=0; i<count1; i++) {
            resultPointer.next = new Node(1);
            resultPointer = resultPointer.next;
        }
        for(let i=0; i<count2; i++) {
            resultPointer.next = new Node(2);
            resultPointer = resultPointer.next;
        }
        return result.next;
    }
}
