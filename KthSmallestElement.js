// Sort Approach
class Solution {
  kthSmallest(arr,l,r,k){
    //code here
    arr.sort((a,b) => a-b);
    return arr[k - 1];
  }
}


// Binary Search Tree Approach
class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    
}

const insert = (root, val) => {
    if(!root) return new Node(val);
    if(root.data > val) root.left = insert(root.left, val);
    else root.right = insert(root.right, val);
    return root;
}

const inorder = (root, result) => {
    if(!root) return;
    inorder(root.left, result);
    result.push(root.data);
    inorder(root.right, result);
}

class Solution {
  kthSmallest(arr,l,r,k){
    //code here
    let root;
    for(let i=l; i<=r; i++) {
        root = insert(root, arr[i]);
    }
    const result = [];
    inorder(root, result);
    return result[k - 1];
    
    
  }
}
