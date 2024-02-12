// Solved Using Heaps
// TC: O(NlogN) SC: O(N)
class MaxHeap {
    constructor(nums = []) {
        this.heap = [];
        nums.forEach(num => this.insert(num));
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = this.getParentIndex(currentIndex);
            if (this.heap[currentIndex] > this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return maxValue;
    }

    heapifyDown() {
        let currentIndex = 0;
        while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
            const leftChildIndex = this.getLeftChildIndex(currentIndex);
            const rightChildIndex = this.getRightChildIndex(currentIndex);
            let largerChildIndex = leftChildIndex;
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
                largerChildIndex = rightChildIndex;
            }
            if (this.heap[currentIndex] < this.heap[largerChildIndex]) {
                this.swap(currentIndex, largerChildIndex);
                currentIndex = largerChildIndex;
            } else {
                break;
            }
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

var findKthLargest = function(nums, k) {
    const maxHeap = new MaxHeap(nums);
    for (let i = 0; i < k - 1; i++) {
        maxHeap.extractMax();
    }
    return maxHeap.peek();
};





// Solved Using Maps
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
