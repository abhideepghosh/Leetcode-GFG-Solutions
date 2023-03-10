const rotatedPoint = (nums) => {
    let start = 0, end = nums.length - 1;
    while(start < end) {
        const mid = start + Math.floor((end - start) / 2);
        if(nums[mid] > nums[end]) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
    }
    return start;
}

var findMin = function(nums) {
    return nums[rotatedPoint(nums)];
};
