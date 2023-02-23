/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {void}
*/

class Solution{
    segregateElements(arr,n){
        //code here
        const resultPos = [];
        const resultNeg = [];
        arr.forEach((num) => {
            num >= 0 ? resultPos.push(num) : resultNeg.push(num);
        });
        const result = [...resultPos, ...resultNeg];
        for(let i=0; i<n; i++) {
            arr[i] = result[i];
        }
    }
}
