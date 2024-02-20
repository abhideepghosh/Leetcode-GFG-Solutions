//TC: O(logn) SC: O(1)
var findMin = function(nums) {
    let start = 0, end = nums.length - 1;  // Initialize search range

    while(start < end) { 
        const mid = Math.floor(start + (end - start) / 2); // Calculate middle index

        // If the middle element is greater than the rightmost, the pivot is to the right
        if(nums[mid] > nums[end]) start = mid + 1;  
        
        // Otherwise, the pivot is to the left (or the subarray is sorted)
        else end = mid;  
    }

    return nums[start]; // Return the minimum element (when start == end)
};
