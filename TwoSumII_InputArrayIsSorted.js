/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(numbers, target) {
    let start = 0, end = numbers.length - 1;
    while(start < end) {
        if(numbers[start] + numbers[end] === target) return [start + 1, end + 1];        
        else if(numbers[start] + numbers[end] < target) start++;
        else end--;
    }
    return [-1, -1];    
};
