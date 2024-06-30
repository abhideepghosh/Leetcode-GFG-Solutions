/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
 // TC: O(SQRT(min(red, blue)))
var maxHeightOfTriangle = function(red, blue) {
    const findHeight = (red, blue) => {
        let maxHeight = 0;
        let level = 1;
        let flag = true;
        while(flag) {
            if(level % 2 === 1) {
                red >= level ? red-=level : flag = false;
            }
            else {
                blue >= level ? blue -= level : flag = false; 
            }
            if(!flag) break;
            level++;
            maxHeight++;
        }
        return maxHeight;
    }
    return Math.max(findHeight(red,blue), findHeight(blue, red));
};
