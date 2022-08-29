/*
Runtime: 3 ms, faster than 97.77% of Java online submissions for Number of Islands.
Memory Usage: 57.5 MB, less than 50.15% of Java online submissions for Number of Islands.
*/
class Solution {
    public int numIslands(char[][] grid) {
        
        //Keeping A Count Of Number Of Islands Found
        int count = 0;
        
        // Traversing Through The 2D Array Till We Find A 1
        for(int i=0; i<grid.length; i++){
            for(int j=0; j<grid[0].length; j++){
                
                if(grid[i][j] == '1'){
                    // The Moment We Find a 1, We Know Its An Island, Hence We Increment The Count
                    count++;
                    /* We Call A Function To Change All 1s Connecting the Current 1 To Zero And Chain The Process 
                    till All The 1's In The Touch With Each Other Horizontally And Vertically Have Turned To Zero
                    We Do This In Order To Avoid Counting The Same Island Again */
                    weFoundOne(grid, i, j);
                }
            }
        }
        
        // Returning The Count Of Islands
        return count;
        
    }
    
    // Recursive Function To Chain Convert All 1s To 0s
    public void weFoundOne(char[][] grid, int i, int j){
        
        // Base Condition For Recursion To Stop (Stopping Out Of Bounds And Stopping The Recursion If grid value equals 0)
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0'){
            return;
        }
        
        //Converting '1' to '0'
        grid[i][j] = '0';
        
        //Calling The Function For 4 Directions(Vertical And Horizontal) 
        weFoundOne(grid, i+1, j);
        weFoundOne(grid, i-1, j);
        weFoundOne(grid, i, j+1);
        weFoundOne(grid, i, j-1);
    }
        
}
