/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    const countArea = (grid, i, j) => {
        if(i >= grid.length || i < 0 || j >= grid[0].length || j < 0 || grid[i][j] === '0') {
            return;
        }
        grid[i][j] = '0';
        countArea(grid, i + 1, j);
        countArea(grid, i - 1, j);
        countArea(grid, i, j + 1);
        countArea(grid, i, j - 1);
    }
    
    let count = 0;
    
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(grid[i][j] === '1') {
                count++;
                countArea(grid, i, j); 
            }
        }
    }
    return count;
};
