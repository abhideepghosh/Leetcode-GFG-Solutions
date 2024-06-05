// TC: O(N) SC: O(1)
class Solution {
    constructor(arr = []) {
      this.arr = arr;
      this.n = arr.length;
    }

    /**
     * @param {number[]} arr
     * return {void}
     */
    convertToWave(arr)
    {
        // your code here
        const swap = (nums, i, j) => {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }

        for(let i=0; i<arr.length - 1; i+=2) {
            swap(arr, i, i + 1);
        }
    this.arr = arr;
    }
}

const sol = new Solution();
sol.convertToWave([1,2,3,4,5]);
console.log(sol.arr);
sol.convertToWave([2,4,7,8,9,10]);
console.log(sol.arr);
sol.convertToWave([]);
console.log(sol.arr);
