/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */



var merge = function(intervals) {
    // Base Condition
    if(!intervals.length) return intervals;
    // Sort Based On The First Start Interval Of The Array
    intervals.sort((a,b) => a[0] - b[0]);

    let prev = intervals[0];
    let result = [prev];

    const mergeIntervals = (currentElement) => {
        if(currentElement[0] <= prev[1]){
            prev[1] = Math.max(prev[1], currentElement[1]);
        }
        else {
            result.push(currentElement);
            prev = currentElement;
        }
    }


    // Creating the new intervals
    intervals.forEach(mergeIntervals);
    return result;
};
