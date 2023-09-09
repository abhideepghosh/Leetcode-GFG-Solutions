
// TC: O(N) SC: O(N)
var intersect = function(nums1, nums2) {
    const map = new Map();
    nums1.forEach(num => {
        map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    });
    const result = [];
    nums2.forEach(num => {
        if(map.has(num)) {
            result.push(num);
            map.get(num) > 1 ? map.set(num, map.get(num) - 1) : map.delete(num);
        }
    });
    return result;
};
