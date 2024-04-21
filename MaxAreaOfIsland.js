/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    const calculateArea = (grid, i, j) => {
        let totalArea = 0;
        const islandArea = (grid, i, j) => {
            if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
                return;
            }
            totalArea += 1;
            grid[i][j] = 0;
            islandArea(grid, i + 1, j);
            islandArea(grid, i, j + 1);
            islandArea(grid, i - 1, j);
            islandArea(grid, i, j - 1);
        }
        islandArea(grid, i, j);
        return totalArea;
    }

    let maxArea = 0;
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
            if(grid[i][j] === 1) {
                maxArea = Math.max(maxArea, calculateArea(grid, i, j));
            }
        }
    }
    return maxArea;
};
