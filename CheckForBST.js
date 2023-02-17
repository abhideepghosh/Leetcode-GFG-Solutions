/**
 * @param {Node} root
 * @returns {boolean}
*/



// Brute Force Inorder Traversal
class Solution 
{
    //Function to check whether a Binary Tree is BST or not.
    isBST(root)
    {
        //your code here
        let currentValue, previousValue, flag = true;
        const inorder = (root) => {
            
            if(!root) return;
            
            if(root.left) inorder(root.left);
            
            if(currentValue !== undefined) {
                previousValue = currentValue;
                currentValue = root.data;
                if(currentValue < previousValue) flag = false;
            }
            else {
                currentValue = root.data;
            }
            
            if(root.right) inorder(root.right);
            
        }
        
        inorder(root);
        return flag;
        
    }
}
