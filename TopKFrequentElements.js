/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    // For Keeping Element As Key And Frequency Of The Element As Value
    const pair = {};

    // Creating A Frequency Map Of Elements
    nums.forEach((num) => {
       pair[num] = pair[num] ? pair[num] + 1 : 1;
    }); 

    // Sorted Based Off On Values(Frequencies) Of The Keys(Elements)
    const sorted = Object.keys(pair).sort((a,b) => {return pair[b]-pair[a]});
    
    // Returning The First K Elements
    return sorted.splice(0,k);
};
