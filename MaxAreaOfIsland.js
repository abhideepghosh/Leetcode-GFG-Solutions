/**
 * @param {number[][]} grid
 * @return {number}
 */


const islandArea = (grid, i, j, islandDetails) => {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
        return;
    }
    grid[i][j] = 0;
    islandDetails.compare = islandDetails.compare + 1;
    islandDetails.max = Math.max(islandDetails.max, islandDetails.compare);
     islandArea(grid, i + 1, j, islandDetails);
     islandArea(grid, i - 1, j, islandDetails);
     islandArea(grid, i, j + 1, islandDetails);
     islandArea(grid, i, j - 1, islandDetails);
}


var maxAreaOfIsland = function(grid) {
    const islandDetails = {
        max: 0,
        compare: 0
    }
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(grid[i][j] === 1) {
                islandArea(grid, i, j, islandDetails);
                islandDetails.compare = 0;
            }
        }
    }
    return islandDetails.max;
};
