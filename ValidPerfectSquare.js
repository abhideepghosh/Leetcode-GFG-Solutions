/**
 * @param {number} num
 * @return {boolean}
 */

const isPerfectSquare = (num) => {
    if(num === 1) return true;
    let start = 1, end = Math.floor(num / 2);
    while(start <= end) {
        const mid =  start + Math.floor((end - start) / 2);
        if(mid * mid === num) return true;
        else if(mid * mid < num) start = mid + 1;
        else end = mid - 1;
    }
    return false;
}

// var isPerfectSquare = function(num) {
//     squareRoot = num ** 0.5;
//     if(squareRoot === Math.floor(squareRoot)) return  true;
//     else return false;
// };
