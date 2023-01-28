/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/


/**
 * @param {Node} head
 * @param {number} M
 * @param {number} N
*/

class Solution {
  linkdelete(head,M,N){
    //code here
    let currentNode = head;
    let previousNode = null;
    while(currentNode) {
        for(let i=0; i<M; i++) {
            previousNode = currentNode;
            if(currentNode) currentNode = currentNode.next;
        }
        for(let i=0; i<N; i++) {
            if(currentNode) currentNode = currentNode.next;
        }
        if(previousNode) previousNode.next = currentNode;
    }
  }
}
