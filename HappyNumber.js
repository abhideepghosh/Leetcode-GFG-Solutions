/**
 * @param {number} n
 * @return {boolean}
 */

const squareOfDigits = (n) => {
    return [...`${n}`].reduce((acc, curr) => acc + (Number(curr) ** 2), 0);
}

var isHappy = function(n) {
    const set = new Set();
    
    while(!set.has(n)) {
        set.add(n);
        n = squareOfDigits(n);
        if(n === 1) return true; 
    }
    return false;
};
