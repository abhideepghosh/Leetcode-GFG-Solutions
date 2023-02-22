/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

const findOptimalWeight = (weights, capacity, days) => {
    let daysNeeded = 1;
    let currentLoad = 0;
    weights.forEach((weight) => {
        currentLoad += weight;
        if(currentLoad > capacity) {
            currentLoad = weight;
            daysNeeded++;
        }
    });
    return daysNeeded <= days;
} 

var shipWithinDays = function(weights, days) {
    let maxWeight = 0;
    const totalWeights = weights.reduce((acc, curr) => {
        maxWeight = Math.max(maxWeight, curr);
        return acc + curr;
    }, 0);
    let start = maxWeight;
    let end = totalWeights;
    while(start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if(findOptimalWeight(weights, mid, days)) end = mid - 1;
        else start = mid + 1;
    }
    return start;
};
