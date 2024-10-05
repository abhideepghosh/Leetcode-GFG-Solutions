/**
 * @param {number[]} 
 * @return {number} 
 */
// TC: O(N) SC: O(1)
var trap = function(height) {
    // Initialize two pointers, one at the beginning and one at the end.
    let left = 0;
    let right = height.length - 1;

    // Initialize variables to keep track of the maximum height encountered from each side.
    let leftMax = 0;
    let rightMax = 0;

    // Initialize the total trapped water to zero.
    let totalWater = 0;

    // Iterate while the left pointer is less than the right pointer.
    while (left < right) {
        // If the current left bar is smaller than the current right bar,
        // it means the left bar determines the trapping capacity.
        if (height[left] < height[right]) {
            // If the current left bar is greater than or equal to the current leftMax,
            // update leftMax.
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                // Otherwise, add the trapped water to the total.
                // The water trapped is the difference between the current leftMax and the current left bar's height.
                totalWater += leftMax - height[left];
            }
            // Move the left pointer one step to the right.
            left++;
        } else {
            // If the current right bar is smaller than or equal to the current left bar,
            // it means the right bar determines the trapping capacity.
            // Apply the same logic as above but for the right side.
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            // Move the right pointer one step to the left.
            right--;
        }
    }

    // Return the total trapped water.
    return totalWater;
};


//TC: O(N) SC: O(N)
var trap = function(height) {
    const left = [];  // Array to store maximum heights encountered from the left
    const right = []; // Array to store maximum heights encountered from the right

    // Precompute maximum heights from the left:
    for (let i = 0; i < height.length; i++) {
        if (i === 0) {
            left[i] = height[i]; // Base case: first element is its own left max
        } else {
            left[i] = Math.max(height[i], left[i - 1]); // Store the maximum between the current height and the previous left max
        }
    }

    // Precompute maximum heights from the right:
    for (let i = height.length - 1; i >= 0; i--) {
        if (i === height.length - 1) {
            right[i] = height[i]; // Base case: last element is its own right max
        } else {
            right[i] = Math.max(right[i + 1], height[i]); // Store the maximum between the current height and the previous right max
        }
    }

    // Calculate trapped water:
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        // Water is limited by the shorter of the left and right max heights
        const waterLevel = Math.min(left[i], right[i]);
        result += waterLevel - height[i]; 
    }

    return result;
};
