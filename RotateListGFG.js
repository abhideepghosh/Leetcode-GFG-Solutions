/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to rotate a linked list.
    rotate(head, k)
    {
        //your code here
        if(!head && !head.next) return head;
        let traverseNode = head;
        let size = 1;
        while(traverseNode && traverseNode.next)  {
            traverseNode = traverseNode.next;
            size++;
        }
        if(size === k) return head;
        k = k % size;
        traverseNode.next = head;
        traverseNode = traverseNode.next;
        let rotations = k;
    
        while(rotations > 1) {
            traverseNode = traverseNode.next;
            rotations--;
        }
    
        head = traverseNode.next;
        traverseNode.next = null;
        return  head;
    }
}
