/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 // TC: O(N) SC: O(N)
var canBeEqual = function(target, arr) {
    const map = new Map();
    target.forEach(el => {
        map.set(el, (map.get(el) || 0) + 1);
    });

    for(let i=0; i<arr.length; i++) {
        if(!map.has(arr[i])) return false;
        else {
            if(map.get(arr[i]) === 1) map.delete(arr[i]);
            else map.set(arr[i], map.get(arr[i]) - 1);
        }
    }
    return map.size === 0;
};
