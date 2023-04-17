/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = candies.reduce((acc, curr) => Math.max(acc, curr), 0);
    return candies.map(element => (extraCandies + element) >= max ? true : false);
};
