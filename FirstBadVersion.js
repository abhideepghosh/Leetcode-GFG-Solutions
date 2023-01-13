/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1, end = n;
        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            const target = isBadVersion(mid);
            if(target === false) start = mid + 1;
            else end = mid - 1;
        }
        return start;
    };
};
