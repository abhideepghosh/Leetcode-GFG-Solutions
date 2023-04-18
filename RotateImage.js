/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const reverse = (nums) => {
    let start = 0;
    let end = nums.length - 1;
    while(start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}

var rotate = function(matrix) {
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




// Another Approach
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i=0; i<matrix.length; i++) {
        for(let j=i; j<matrix[i].length; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    const swap = (nums, i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    for(let i=0; i<matrix.length; i++) {
        matrix[i].reverse();
    }

};
