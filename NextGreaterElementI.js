/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */





var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
     const map = new Map();
        
    const peek = () => stack[stack.length - 1];
        
    nums2.forEach((num) => {
        while(stack.length !== 0 && peek() < num) map.set(stack.pop(), num);
        stack.push(num);
    });
        
    const result = nums1.map((num) => map.has(num) ? map.get(num) : -1);
    return result;

};
