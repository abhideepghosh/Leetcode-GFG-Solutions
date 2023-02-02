class Solution {
    /* Should return data of middle node. If linked list is empty, then  -1*/
    getMiddle(head)
    {
        //your code here
        let traverseNode = head;
        let fastNode = head;
        while(fastNode && fastNode.next) {
            fastNode = fastNode.next.next;
            traverseNode = traverseNode.next;
        }
        return traverseNode.data;
        
    }
}
