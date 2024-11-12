// Merge Sort TC: O(nlogn) SC: O(n)
const conquer = (nums, start, mid, end) => {
    const mergedArray = [];
    let idxStart = start;
    let midIdx = mid + 1;
    while(start <= mid && midIdx <= end) {
        if(nums[start] < nums[midIdx]) {
            mergedArray.push(nums[start]);
            start++;
        }
        else {
            mergedArray.push(nums[midIdx]);
            midIdx++;
        }
    }
    while(start <= mid) {
        mergedArray.push(nums[start]);
        start++;
    }
    while(midIdx <= end) {
        mergedArray.push(nums[midIdx]);
        midIdx++;
    }
    for(let i=0, index = idxStart; i<mergedArray.length; i++,index++) {
        nums[index] = mergedArray[i];
    }
}


const merge = (nums, start, end) => {
    if(start >= end) return;
    const mid = start + Math.floor((end - start) / 2);
    merge(nums, start, mid);
    merge(nums, mid + 1, end);
    conquer(nums, start, mid, end);
}



// Sample Arrays for Testing
const arrays = {
    emptyArray: [],
    singleElementArray: [1],
    sortedArray: [1, 2, 3, 4, 5],
    reverseSortedArray: [5, 4, 3, 2, 1],
    allSameElementsArray: [7, 7, 7, 7, 7],
    negativeNumbersArray: [-3, -1, -4, -2, 0],
    mixedPositiveNegativeArray: [-10, 34, 7, -2, 45, 0, -3, 8],
    decimalNumbersArray: [3.5, -1.2, 7.4, 2.3, 5.1],
    largeRangeArray: [1000, -500, 0, 200, -1000, 500],
    randomArray: [32, 15, 9, 27, 12, 6, 25, 3, 8, 22, 10, 1, 18, 30, 7, 2, 28, 19, 14, 21],
    arrayWithDuplicates: [5, 3, 8, 3, 9, 1, 3, 6],
    oneUniqueAmongMany: [2, 2, 2, 2, 1, 2, 2],
    powerOfTwoLengthArray: [16, 2, 9, 3, 10, 5, 14, 7],
    nonPowerOfTwoLengthArray: [13, 1, 12, 7, 9, 3, 8]
};

// Run `merge` on each array and log the results
for (const [name, array] of Object.entries(arrays)) {
    merge(array, 0, array.length - 1);
    console.log(`${name}:`, array);
}















