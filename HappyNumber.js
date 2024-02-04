/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const breakAndSquare = (num) => {
        let sum = 0;
        while(num >= 1) {
            sum += (num % 10) ** 2;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    const set = new Set();
    while(!set.has(n)) {
        if(n === 1) return true;
        else{
            set.add(n);
            n = breakAndSquare(n);
        }
    }
    return false;
};

// Alternate Solution
var isHappy = function(n) {
    const breakAndSquare = (num) => [...`${num}`].reduce((acc, curr) => acc + Number(curr % 10) ** 2, 0);
    const set = new Set();
    while(!set.has(n)) {
        if(n === 1) return true;
        set.add(n);
        n = breakAndSquare(n);
    }
    return false;
};
