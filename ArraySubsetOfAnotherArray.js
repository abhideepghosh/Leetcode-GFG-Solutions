/**
 * @param {number[]} a1
 * @param {number[]} a2
 * @param {number} n
 * @param {number} m
 * @returns {string}
*/

class Solution{
    isSubset(a1, a2, n, m){
        //code here
        const map = new Map();
        a1.forEach((num) => {
            map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
        });
        for(let num of a2) {
            if(map.has(num)) {
                if(map.get(num) === 1) map.delete(num);
                else map.set(num, map.get(num) - 1);
            }
            else return 'No';
        }
        return 'Yes';
    }
}
