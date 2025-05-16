/**
 * @param {number[]} height
 * @return {number}
 */
// TC: O(N) SC: O(1)
var maxArea = function(height) {
    let start = 0, end = height.length - 1;
    let maxArea = 0;
    while(start < end) {
        const left = height[start], right = height[end];
        const breadth = Math.min(left, right);
        const length = end - start;
        const area = length * breadth;
        maxArea = Math.max(maxArea, area);
        if(left < right) start++;
        else end--;
    }
    return maxArea;
};
