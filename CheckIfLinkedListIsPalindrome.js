class Solution {
    //Function to check whether the list is palindrome.
    reverse(head) {
        let previousNode = null;
        while(head) {
            const nextNode = head.next;
            head.next = previousNode;
            previousNode = head;
            head = nextNode;
        }
        return previousNode;
    }
    
    isPalindrome(head)
    {
        //your code here
        let traverseNode = head;
        let fastNode = head;
        while(fastNode && fastNode.next) {
            traverseNode = traverseNode.next;
            fastNode = fastNode.next.next;
        }
        let reverseNode = this.reverse(traverseNode);
        traverseNode = head;
        while(reverseNode) {
            if(reverseNode.data !== traverseNode.data) return false;
            reverseNode = reverseNode.next;
            traverseNode = traverseNode.next;
        }
        return true;
    }
    
}
