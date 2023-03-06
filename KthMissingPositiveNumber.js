/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const max = Math.max(...arr);
    const set = new Set(arr);
    let count = 0;
    let i;
    for(i=1; i<=max; i++) {
        if(!set.has(i)) count++;
        if(count === k) return i;
    }
    if(count < k) {
        while(count < k - 1) {
            i++;
            count++;
        }
    }
    return i;
};
