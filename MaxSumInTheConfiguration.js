/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
*/

class Solution {
    
    max_sum(a, n)
    {
        //your code here
        let sumOfProducts = 0, sum = 0, result = 0;
        
        a.forEach((num, i) => {
            sumOfProducts += (num * i);
            sum += num;
        });
        
        result = sumOfProducts;
        
        for(let i=1; i<n; i++) {
            sumOfProducts = sumOfProducts - (sum - a[i - 1]) + a[i - 1] * (n - 1);
            result = Math.max(result, sumOfProducts);
        }
        
        return result;
        
    }
}
