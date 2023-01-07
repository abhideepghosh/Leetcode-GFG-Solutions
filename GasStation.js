/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total = 0, avail = 0, index = 0;
    for(let i=0; i<gas.length; i++){
        total += (gas[i] - cost[i]);
        avail += (gas[i] - cost[i]);

        if(avail < 0){
            avail = 0;
            index = i + 1;
        }
    }
    return (total >= 0) ? index : -1; 
};
