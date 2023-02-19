/**
 * @param {Node} root
 * @param {number} low
 * @param {number} high
 * @returns {number[]}
*/


class Solution
{
    //Function to return a list of BST elements in a given range.
    printNearNodes(root, low, high)
    {
        //your code here
        const findRange = (root) => {
            const result = [];
            const inorder = (root) => {
                if(!root) return;
                inorder(root.left);
                if(root.data >=low && root.data <= high)
                    result.push(root.data);
                else if(root.data > high) return;
                inorder(root.right);
            }
            inorder(root);
            return result; 
        }
        return (findRange(root))
    }
}
