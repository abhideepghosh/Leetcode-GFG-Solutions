/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let midPosition = binarySearch(nums, 0, nums.length - 1, target); 
    if(midPosition === -1) return [-1, -1];
    let start, end;
    let startPos = midPosition, endPos = midPosition;
    while(startPos !== -1){
        start = startPos;
        startPos = binarySearch(nums, 0, startPos - 1, target);
    }
    while(endPos !== -1){
        end = endPos;
        endPos = binarySearch(nums, endPos+1, nums.length - 1, target);
    }
    return [start, end];

};

const binarySearch = (nums, start, end, target) => {
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target) start = mid + 1;
        if(nums[mid] > target) end = mid - 1;
    }
    return -1;

}
