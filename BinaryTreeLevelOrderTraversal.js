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
var levelOrder = function(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];
    while(queue.length !== 0) {
        const list = [];
        const size = queue.length;
        for(let i=0; i<size; i++) {
            const node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            list.push(node.val);
        }
        result.push(list);
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
