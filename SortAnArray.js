/**
 * @param {number[]} nums
 * @return {number[]}
 */

const merge = (nums, start, end) => {
    if(start >= end) return;
    const mid = start + Math.floor((end - start) / 2);
    merge(nums, start, mid);
    merge(nums, mid + 1, end);
    conquer(nums, start, mid, end);
}

const conquer = (nums, start, mid, end) => {
    const result = [];
    let index = start;
    let midIndex = mid + 1;
    while(start <= mid && midIndex <= end) {
        if(nums[start] < nums[midIndex]) {
            result.push(nums[start]);
            start++;
        }
        else {
            result.push(nums[midIndex]);
            midIndex++;
        }
    }
    while(start <= mid) {
        result.push(nums[start]);
        start++;
    }
    while(midIndex <= end) {
        result.push(nums[midIndex]);
        midIndex++;
    }
    result.forEach((num, i) => {
        nums[index] = num;
        index++;
    });
}

var sortArray = function(nums) {
    merge(nums, 0, nums.length - 1);
    return nums;
};
