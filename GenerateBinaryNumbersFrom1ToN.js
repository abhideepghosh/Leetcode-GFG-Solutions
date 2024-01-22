// Sample Input: n = 3
// Sample Output: ["1","10","11"]

// Using Queue
"use strict";
function findBin(number) {
    const result = [];
    const queue = new Queue();
    queue.enqueue('1');
    for(let i=0; i<number; i++) {
        result.push(queue.dequeue());
        queue.enqueue(result[i] + '0');
        queue.enqueue(result[i] + '1');
    }
    return result;
}

// Using toString() method
"use strict";
function findBin(number) {
    const result = [];
    for(let i=1; i<=number; i++) {
        result.push(i.toString(2))
    }
    return result;
}
