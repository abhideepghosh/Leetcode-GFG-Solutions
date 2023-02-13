/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

// TC: O(N * N) SC: O(N)
class Solution {
    longestKSubstr(s, k) {
        //code here
        // Flags To Detect Whether The Execution Entered Loop 1 And Loop 2
        let flag1 = true, flag2 = true;
        // Indexes To Traverse Through The Loops
        let i = -1, j = -1;
        // HashMap To Process And Find The Window Of K Distinct Characters
        const map = new Map();
        // Result Variable To Store The Length Of Max Size Window Of K Distinct Characters
        let result = -1;
        
        // Outer Loop
        while(flag1 && flag2) {
            flag1 = false;
            flag2 = false;
            while(i < s.length - 1) {
                flag1 = true;
                i++;
                // Creating Frequency Map
                map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
                
                if(map.size < k) {
                    continue;
                }
                // On map.size Being Equal To K, We Compare And Store The Max Length
                else if(map.size === k) {
                    const len = i - j;
                    result = Math.max(result, len);
                }
                // On K > map.size, We Break From The Loop
                else {
                    break;
                }
            }
            while(j < i) {
                flag2 = true;
                j++;
                // Deleting Frequencies Till map.size >= K
                map.get(s[j]) === 1 ? map.delete(s[j]) : map.set(s[j], map.get(s[j]) - 1);
                if(map.size > k) {
                    continue;
                }
                // On map.size Being Equal To K, We Compare And Store The Max Length
                else if(map.size === k) {
                    const len = i - j;
                    result = Math.max(result, len);
                    break;
                }
            }
        }
        // Returning The Result
        return result;
    }
}
