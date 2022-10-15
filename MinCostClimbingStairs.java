/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Min Cost Climbing Stairs.
Memory Usage: 41.9 MB, less than 93.32% of Java online submissions for Min Cost Climbing Stairs.
*/
// Greedy Algorithm TC: O(N) SC: O(1)
class Solution {
    
    public int minCostClimbingStairs(int[] cost) {
        
        // Finding Min Of Last Two Element And Adding It With Current Element
        for(int i=2; i<cost.length; i++){
            cost[i] += Math.min(cost[i-1], cost[i-2]);
        }
        
        // Returning The Minimum Of Last 2 Modified Element
        return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
        
    }
}



class Solution {
    public int minCostClimbingStairs(int[] cost) {
        
        if(cost.length ==2){
            return Math.min(cost[0],cost[1]);
        }
        
        int arr[] = new int[cost.length+1];
        arr[0] = 0;
        arr[1] = 0;
        
        for(int i=2; i<arr.length; i++){
            arr[i] = Math.min(arr[i-1]+cost[i-1],arr[i-2]+cost[i-2]);
        }
        
        return arr[arr.length-1];
        
    }
}
