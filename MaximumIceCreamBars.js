/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */

var maxIceCream =  (costs, coins) => {
    const max = Math.max(...costs);
    const dp = new Array(max + 1).fill(0);
    let iceCreams = 0;
    costs.forEach(val => {
        dp[val]++;
    })
    let index = 1;
    while(index < dp.length && coins > 0){
        if(index <= coins && dp[index] > 0){
            while(dp[index] > 0 && coins >= index){
            coins -= index;
            iceCreams++;
            dp[index]--;
            }
        }
        index++;
    }
    return iceCreams;
}
 
// var maxIceCream = function(costs, coins) {
//     costs.sort((a,b) => a-b);
//     let iceCreams = 0;
//     let index = 0;
//     while(index < costs.length && coins > 0){
//         if(coins >= costs[index]){
//             iceCreams++;
//             coins -= costs[index];
//         }
//         index++;
//     }
//     return iceCreams;
// };
