/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const leftMax = [];
    let left;
    const rightMax = [];
    let right;
    height.forEach((val, i) => {
        if(i === 0) {
            left = val;
            leftMax.push(left);
        }
        else {
            left = Math.max(left, val);
            leftMax.push(left);
        }
    });
    for(let i=height.length - 1; i >= 0; i--) {
        const val = height[i];
        if(i === height.length - 1) {
            right = val;
            rightMax[i] = right;
        }
        else {
            right = Math.max(val, right);
            rightMax[i] = right;
        }
    }

    let totalWater = 0;
    for(let i=0; i<height.length; i++) {
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return totalWater;

};
