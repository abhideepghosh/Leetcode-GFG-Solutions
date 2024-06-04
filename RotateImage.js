/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// TC: O(n^2) SC: O(1)
var rotate = function(matrix) {
    const reverse = (nums) => {
        let start = 0, end = nums.length - 1;
        while(start < end) {
            const temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    for(let i=0; i<matrix.length; i++) {
        for(let j=i; j<matrix[0].length; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
        
    }
    for(let i=0; i<matrix.length; i++) {
        reverse(matrix[i]);
    }
};
