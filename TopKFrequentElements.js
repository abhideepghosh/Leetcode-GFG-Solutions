/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 // TC: O(N) SC: O(N)
var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    nums.forEach((num, i) => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });
    const buckets = [];
    for(let i=0; i<=nums.length; i++) {
        buckets.push([]);
    }
    for(let [num, freq] of freqMap) {
        buckets[freq].push(num);
    }
    const result = [];
    for(let i=buckets.length - 1; i>=0; i--) {
        if(buckets[i]) result.push(...buckets[i]);
    }
    return result.slice(0, k);
};



// TC: O(NlogN) SC: O(N)
var topKFrequent = function(nums, k) {
    
    const freqMap = new Map();
    nums.forEach((num) => {
        freqMap.set(num, freqMap.has(num) ? freqMap.get(num) + 1 : 1);
    });
    
    const freqArray = [...freqMap].map((key) => key);

    freqArray.sort((a,b) => b[1] - a[1]);
    
    const result = [];
    
    for(let i=0; i<k; i++){
        result.push(freqArray[i][0]);
    }
    
    return result;
    
};
