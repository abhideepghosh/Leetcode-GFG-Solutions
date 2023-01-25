/**
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
*/
 
class Solution 
{
    //Function to check if a string can be obtained by rotating
    //another string by exactly 2 places.
    // TC: O(N) SC: O(1)
    isRotated(a, b)
    {
        // code here
        if(a.length !== b.length) return false;
        let index = 2;
        let flag = true;
        for(let i=0; i<a.length; i++) {
            index = index % b.length;
            if(a[i] !== b[index]) {
                flag = false;
                break;
            }
            else {
                index++;
            }
        }
        if(flag === true) return true;
        else {
            index = b.length - 2;
            for(let i=0; i<a.length; i++) {
                index = index % b.length;
                if(a[i] !== b[index]) {
                    return false;
                }
                else {
                    index++;
                }
            }
            return true;
        }
        return true;
    }
}




// TC: O(N) SC: O(N)
    isRotated(a, b)
    {
        // code here
        let str = a.slice(2) + a.slice(0,2);
        if(str === b) return true;
        else {
            str = a.slice(-2) + a.slice(0, -2);
            return str === b;
        }
    }
