/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to remove a loop in the linked list.
    removeLoop(head)
    {
        //your code here
        if(!head || !head.next) return head;
        let traverseNode = head;
        let fastNode = head;
        let loopNode = null;
        while(fastNode && fastNode.next) {
            fastNode = fastNode.next.next;
            loopNode = traverseNode;
            traverseNode = traverseNode.next;
            if(fastNode === traverseNode) {
                let entry = head;
                while(entry !== traverseNode) {
                    entry = entry.next;
                    loopNode = traverseNode;
                    traverseNode = traverseNode.next;
                }
                loopNode.next = null;
            }
        }
        return head;
        
    }
