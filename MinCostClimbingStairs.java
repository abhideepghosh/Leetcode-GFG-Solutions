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
