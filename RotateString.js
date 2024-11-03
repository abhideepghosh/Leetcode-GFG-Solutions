/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 // TC: O(N) SC: O(N)
var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false;
    const sDouble = s + s;
    for(let i=0; i<sDouble.length; i++) {
        const goalLength = goal.length;
        if(sDouble.length - i < goalLength) return false;
        let idx = 0;
        for(let j = i; idx < goalLength; idx++) {
            if(sDouble[j] !== goal[idx]) break;
            else j++;  
        }
        if(idx === goalLength) return true;
    } 
    return false;
};


// Another Variation with use of built in JS methods
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 // TC: O(N) SC: O(N)
var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    const sDouble = s + s;

    return sDouble.includes(goal);
};
