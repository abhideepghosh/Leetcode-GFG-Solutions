/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const result = new Array(n + 1).fill(0);
    trust.forEach(([people, mayor]) => {

        result[people]--;
        result[mayor]++;

    });

    for(let i=1; i<result.length; i++) {
        if(result[i] === n - 1) {
            return i;
        }
    }

    return -1;

};
