/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxPriorityQueue();
    stones.forEach((el) => {
        maxHeap.enqueue(el);
    });
    while(maxHeap.size() > 1) {
        const y = maxHeap.dequeue().element;
        const x = maxHeap.dequeue().element;
        if(y !== x) {
            maxHeap.enqueue(y - x);
        }
    }
    return maxHeap.size() === 0 ? 0 : maxHeap.front().element;
};
