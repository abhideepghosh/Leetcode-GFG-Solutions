/**
 * @param {Number[]} arr
 * @returns {String}
 */

class Solution{
    printLargest(arr){
        //code here
        arr.sort((a,b) => {
            const str1 = String(a + b);
            const str2 = String(b + a);
            if(str1.localeCompare(str2) > 0) return 1;
            else if(str2.localeCompare(str1) > 0) return -1;
            else return 0;
        });
        return arr.reverse().join('');
    }
}
