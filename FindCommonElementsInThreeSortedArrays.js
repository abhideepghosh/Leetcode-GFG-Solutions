/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @param {number} n1
 * @param {number} n2
 * @param {number} n3
 * @returns {number[]}
*/

class Solution{
    commonElements(arr1, arr2, arr3, n1, n2,n3){
        //code here
        const result = [];
        let i = 0, j = 0, k = 0;
        
        while(i < n1 && j < n2 && k < n3) {
            if(arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
                if(result.length > 0 && result[result.length - 1] === arr1[i]) {
                    i++;
                    j++;
                    k++;
                    continue;
                }
                result.push(arr1[i]);
                i++;
                j++;
                k++;
            }
            else if(arr1[i] < arr2[j]) i++;
            else if(arr2[j] < arr3[k]) j++;
            else k++;
        }
        
        return result;
        
    }
}
