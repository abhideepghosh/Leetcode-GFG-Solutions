/**
 * @param {number[]} digits
 * @return {number[]}
 */
// TC: O(1) SC: O(N)
var findEvenNumbers = function(digits) {
    const freq = new Array(10).fill(0);
    const result = [];
    digits.forEach((currentNum) => {
        freq[currentNum]++;
    });
    for(let i=100; i<1000; i+=2) {
        const firstDigit = Math.floor(i / 100);
        const secondDigit = Math.floor((i / 10) % 10);
        const thirdDigit = Math.floor(i % 10);
        const currentNum = new Array(10).fill(0);
        currentNum[firstDigit]++;
        currentNum[secondDigit]++;
        currentNum[thirdDigit]++;
        let canForm = true;
        for(let j=0; j<10; j++) {
            if(currentNum[j] > freq[j]) {
                canForm = false;
                break;
            }
        }
        if(canForm) result.push(i);
    }
    return result;
};
