/*
# Intuition
The Simple Intuition Used In This Solution Is Backtracking.

# Approach

1. Create a result array.
2. Create a function backtrack with result array, a temp array and the nums array as parameters.
3. In the function, we start a loop for elements of nums.
4. On each iteration, we check if the temp array contains nums, if it does then we continue.
5. Else, we push the current element in the array and call the backtrack function again with the same parameters.
6. Now, the base condition for this recursion is if the temp array's length becoes strictly equal to nums array length, we push the array's shallow clone into the result array and then we return in order to stop the code and start backtracking.
7. The moment we backtrack, we enter the for loop of the previous recursion stack and we remove the last element of that stack from the temp.
8. Again In the next iteration, the temp array will be filled and the process will continue till the iteration of loop ends.



# Complexity
- Time complexity: O(n!*n)


- Space complexity: O(n)


# Code
*/
// TC: O(n! * n) SC: O(n)
const backtrack = (result, tempArray, nums) => {
    if(tempArray.length === nums.length){
        result.push([...tempArray]);
        return;
    }
    for(let num of nums){
        if(tempArray.includes(num)) continue;
        tempArray.push(num);
        backtrack(result, tempArray, nums)
        tempArray.pop();
    }
}

var permute = function(nums) {
    const result = [];
    backtrack(result, [], nums);
    return result;
};
