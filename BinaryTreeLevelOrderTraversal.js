/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root 
 * @return {number[][]} 
 */
// TC: O(N) SC: O(N)
var levelOrder = function(root) {
    if (!root) return []; // Base case: Handle an empty tree

    const result = []; // Array to store the level-by-level traversal result
    const queue = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
        const size = queue.length; // Store the number of nodes in the current level
        const list = []; // Array to store the nodes of the current level

        for (let i = 0; i < size; i++) {
            const node = queue.shift(); // Dequeue a node from the front
            list.push(node.val); // Add the node's value to the current level's list

            if (node.left) queue.push(node.left);  // Enqueue the left child if it exists
            if (node.right) queue.push(node.right); // Enqueue the right child if it exists
        }

        result.push(list); // Add the current level's list to the result array
    }

    return result;
};


// Alternative - Creating A Custom Queue
class Node {
    constructor (val, next = null) {
        this.val = val;
        this.next = next;
        this.size = 0;
    }
}

class ListQueue {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    isEmpty() {
        return this.size === 0;
    }
    insert(data) {
        if(!this.head) {
            this.head = new ListNode(data);
            this.tail = this.head;
        }
        else {
            this.tail.next = new ListNode(data);
            this.tail = this.tail.next;
        }
        this.size++;
        return this.size; 
    }
    remove() {
        if(this.isEmpty()) return null;
        else {
            const data = this.head.val;
            this.head = this.head.next;
            this.size--;
            return data;
        }
    }
    length() {
        return this.size;
    }
}

var levelOrder = function(root) {
    if(!root) return [];
    const queue = new ListQueue();
    const result = [];
    queue.insert(root);
    while(!queue.isEmpty()) {
        const size = queue.length();    
        const list = [];
        for(let i=0; i<size; i++) {
            const treeNode = queue.remove();
            if(treeNode.left) queue.insert(treeNode.left);
            if(treeNode.right) queue.insert(treeNode.right);
            list.push(treeNode.val);
        }
        result.push(list);
    }
    return result;
};
