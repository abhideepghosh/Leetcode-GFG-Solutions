// Merge Sort
// TC: O(NlogN) SC: O(N)
const nums = [10,5,2,1,60,5,10,20,30,40,80,60,90,100];

const merge = (nums, start, mid, end) => {
    let indexMid = mid + 1;
    const result = [];
    while(start <= mid && indexMid <=end) {
        if(nums[start] < nums[indexMid]) {
            result.push(nums[start]);
            start++;
        }
        else {
            result.push(nums[indexMid]);
            indexMid++;
        }
    }
    while(start <= mid) {
        result.push(nums[start]);
        start++;
    }
    while(indexMid <= end) {
        result.push(nums[indexMid]);
        indexMid++;
    }
    result.forEach((el, i) => {
        nums[i] = el;
    });
}

const divideMerge = (nums, start, end) => {
    if(start >= end) return;
    const mid = Math.floor(start + (end - start) / 2);
    divideMerge(nums, start, mid);
    divideMerge(nums, mid + 1, end);
    merge(nums, start, mid, end);
}

divideMerge(nums, 0, nums.length - 1);

console.log(nums);
