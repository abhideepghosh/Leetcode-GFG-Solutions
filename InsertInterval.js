/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    let [start, end] = newInterval;
    const left = [];
    const right = [];

    for(const [first, last] of intervals) {
        if(start > last) left.push([first, last]);
        else if(end < first) right.push([first, last]);
        else {
            start = Math.min(start, first);
            end = Math.max(end, last);
        }
    }

    return [...left, [start, end], ...right];

};
