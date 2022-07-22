class Solution {
    public static int count = 0;
    public int maxAreaOfIsland(int[][] grid) {
        //int count=0;
        int max = 0;
        for(int i=0; i<grid.length; i++){
            for(int j=0; j<grid[i].length; j++){
                if(grid[i][j]==1){
                    weFoundOne(grid, i,j);
                    
                    max = Math.max(max,count);
                    count = 0;
                }
            }
        }
        return max;
    }
    
    public static void weFoundOne(int[][] grid, int i, int j){
        if(i<0 || i>=grid.length || j<0 || j>=grid[0].length || grid[i][j] == 0){
            return;
        }else{
            count = count + 1;
            grid[i][j]=0;

            weFoundOne(grid, i+1, j);
            weFoundOne(grid, i-1, j);
            weFoundOne(grid, i, j+1);
            weFoundOne(grid, i, j-1);
        }
    }
}
