// TC: O(N) SC: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var majorityElement = function(nums) {
    const count = (el) => {
        let count = 0;
        for(let i=0; i<nums.length; i++) {
            if(el === nums[i]) count++;
        }
        return count;
    }
    if(nums.length < 2) return nums;
    let freq1 = 0, freq2 = 0, el1 = 0, el2 = 1;
    const desiredFreq = Math.floor(nums.length / 3);
    nums.forEach((num) => {
        if(el1 === num) freq1++;
        else if(el2 === num) freq2++;
        else if(freq1 === 0) {
            el1 = num;
            freq1++;
        }
        else if(freq2 === 0) {
            el2 = num;
            freq2++;
        }
        else {
            freq1--;
            freq2--;
        }
    });
    const result = [];
    if(count(el1) > desiredFreq) result.push(el1); 
    if(count(el2) > desiredFreq) result.push(el2);
    return result;
};


// TC: O(N) SC: O(N)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = new Map();
    const desiredFreq = Math.floor(nums.length / 3);
    nums.forEach((num) => {
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
    });    
    const result = [];
    map.forEach((val, key) => {
        if(val > desiredFreq) {
            result.push(key);
        }
    });
    return result;
};
