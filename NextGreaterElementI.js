/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */





var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const map = new Map();

    const peek = () => {
        return stack[stack.length - 1];
    }

    const mapFill = (num) => {
        while(stack.length !== 0 && peek() < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }

    const generateArray = (num) => {
        if(map.has(num)) return map.get(num);
        else return -1;
    }

    nums2.forEach(mapFill);

    const result = nums1.map(generateArray);

    return result;

};
