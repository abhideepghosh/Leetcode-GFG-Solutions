class Solution {
    public int numIslands(char[][] grid) {
        int numberOfIslands = 0;
        for(int i=0; i<grid.length; i++){
            for(int j=0; j<grid[i].length; j++){
                if(grid[i][j]=='1'){
                    numberOfIslands++;
                    weFoundOne(grid,i,j);
                }
            }
        }
        return numberOfIslands;
    }
    
    public static void weFoundOne(char[][] grid, int i, int j){
        if(i<0 || j<0 || i>=grid.length || j>=grid[i].length || grid[i][j]=='0'){
            return;
        }
        grid[i][j]='0';
        weFoundOne(grid,i+1,j);
        weFoundOne(grid,i,j+1);
        weFoundOne(grid,i-1,j);
        weFoundOne(grid,i,j-1);
        
    }
}
