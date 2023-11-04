// Optimized Solution TC: O(N) SC: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    nums.forEach(num => {
        if(i === 0 || num !== nums[i - 1]) {
            nums[i] = num;
            i++; 
        }
    });
    return i;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0, i = 0;
    while(i < nums.length) {
        nums[index++] = nums[i];
        while(nums[i] === nums[i+1]) i++;
        i++;
    }
    return index;
};

// Another Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 1;
    let currentElement = nums[0];
    nums.forEach((el, i) => {
        if(el !== currentElement) {
            currentElement = el;
            nums[index] = el;
            index++;
        }
    });
    return index;
};
