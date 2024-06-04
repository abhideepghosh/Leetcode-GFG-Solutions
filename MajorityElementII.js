/**
 * @param {number[]} nums
 * @return {number[]}
 */
//TC: O(N) SC: O(1)
var majorityElement = function(nums) {
    let freq1 = 0, el1 = null, freq2 = 0, el2 = null;
    nums.forEach((num) => {
        if(el1 && el1 === num) freq1++;
        else if(el2 && el2 === num) freq2++;
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
    freq1 = 0;
    freq2 = 0;
    nums.forEach((num) => {
        if(el1 === num) freq1++;
        else if(el2 === num) freq2++;
    })
    const result = [];
    if(freq1 > Math.floor(nums.length/3)) result.push(el1); 
    if(freq2 > Math.floor(nums.length/3)) result.push(el2); 
    return result; 
};
