/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 
 // TC: O(N) SC: O(N)
var findKthLargest = function(nums, k) {
    // Taking maxElement for storing the final kth largest element
    let maxElement = 0;
    // Using Map For Storing [key: array element, value: frequency]
    const fMap = new Map();
    // Creating Frequency Map
    nums.forEach((num) => {
        fMap.has(num) ? fMap.set(num, fMap.get(num) + 1) : fMap.set(num, 1);
        maxElement = Math.max(maxElement, num);
    });
    // Finding The Kth Element
    while(k > 0){
        // Map data structure has O(1) search time
        // With frequency in iteration
        // The maximum iterations of this nested loop will be N times (Size Of The Array)
        if(fMap.has(maxElement)){
            let frequency = fMap.get(maxElement)
            while(frequency > 0){
                k--;
                frequency--;
                // Returning maxElement if k === 0
                if(k === 0) return maxElement;
            }
        }
        maxElement--;
    }
    // Returning maxElement as default return statement
    return maxElement;

};
