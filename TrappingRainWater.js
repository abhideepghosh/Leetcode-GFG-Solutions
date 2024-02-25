/**
 * @param {number[]} height
 * @return {number}
 */
//TC: O(N) SC: O(1)
var trap = function(height) {
    // Pointers to track the boundaries of our search area
    let left = 0, right = height.length - 1;

    // Variables to store the maximum height seen from the left and right sides
    let leftMax = 0, rightMax = 0; 

    // Variable to accumulate the trapped water 
    let totalWater = 0;

    // Iterate while the left and right pointers haven't crossed 
    while (left < right) {
        // If the current bar on the left is shorter than the bar on the right...
        if (height[left] < height[right]) {
            // Update leftMax if necessary
            leftMax = Math.max(leftMax, height[left]);

            // Potential water above the current bar: leftMax - height[left]
            totalWater += leftMax - height[left];

            // Move the left pointer inward
            left++;
        } else { 
            // Update rightMax if necessary
            rightMax = Math.max(rightMax, height[right]);

            // Potential water above the current bar: rightMax - height[right]
            totalWater += rightMax - height[right];

            // Move the right pointer inward
            right--; 
        }
    }

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
