// TC: O(N) SC: O(1) (One Loop Method)
var removeNthFromEnd = function(head, n) {
    let stablePointer = head;
    let unstablePointer = head;
    while(unstablePointer && unstablePointer.next) {
        unstablePointer = unstablePointer.next;
        n--;
        if(n < 0) stablePointer = stablePointer.next;
    }
    n > 0 ? head = head.next : stablePointer.next = stablePointer.next.next;
    return head;  
};


// TC: O(N) SC: O(1) (One Loop Method)
var removeNthFromEnd = function(head, n) {
    let gap = 0;
    let traverseNode = head;
    let deleteNode = head;
    while(traverseNode) {
        traverseNode = traverseNode.next;
        gap++;
        if(gap > n + 1) {
            deleteNode = deleteNode.next;
        }
    }
    if(gap < n + 1) head = head.next;
    else deleteNode.next = deleteNode.next.next;
    return head;
};

// TC: O(N) SC: O(1) (Two Pointer Method)
var removeNthFromEnd = function(head, n) {
   
    let stableNode = head;
    let unstableNode = head;
    
    while(n >= 0 && unstableNode){
        unstableNode = unstableNode.next;
        n--;
    }
   
    if(n >= 0) return head.next; 
    
    while(unstableNode) {
        stableNode = stableNode.next;
        unstableNode = unstableNode.next;
    }
    
    stableNode.next = stableNode.next.next;
    return head;
};

// TC: O(N) SC: O(1) (Size Calculation Method)
var removeNthFromEnd = function(head, n) {
    let traverseNode = head;
    let size = 0;
    while(traverseNode) {
        traverseNode = traverseNode.next;
        size++;
    }
    if(size === n) return head.next;
    size = size - n;
    traverseNode = head;
    while(size > 1) {
        traverseNode = traverseNode.next;
        size--;
    }
    traverseNode.next = traverseNode.next.next;
    return head;
};
