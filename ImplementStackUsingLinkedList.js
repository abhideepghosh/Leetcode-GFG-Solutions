//User function Template for javascript

class ListNode {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class MyQueue{
    constructor(){
        this.front = null;  // QueueNode
        this.rear = null;   // QueueNode
    }
    
    /**
     * @param {number} x
    */
    //Function to push an element into the queue.
    push(x){
        // code here
        if(!this.front) {
            this.front = new ListNode(x);
            this.rear = this.front;
        }
        else {
            this.rear.next = new ListNode(x);
            this.rear = this.rear.next;
        }
    }
    
    /**
     * @returns {number}
    */
    //Function to pop front element from the queue.
    pop(){
        // code here
        if(!this.front) return -1;
        else {
            const popped = this.front.val;
            this.front = this.front.next;
            return popped;
        }
    }
}
