/**
 * @param {number[]} nums
 * @return {number}
 */
//TC: O(N) SC: O(N)
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let maxSize = 0;
    nums.forEach((num) => {
        if(set.has(num) && !set.has(num + 1)) {
            let size = 0;
            while(set.has(num)) {
                size++;
                num--;
            }
            maxSize = Math.max(maxSize, size);
        }
    });
    return maxSize;
};
