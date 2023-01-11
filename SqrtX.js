/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 1, end = Math.floor(x / 2);
    if(x === 1) return 1;
    while(start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if(mid * mid === x) return mid;
        else if(mid * mid < x) start = mid + 1;
        else if(mid * mid > x) end = mid - 1;

    }
    return start-1;
};
