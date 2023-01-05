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
