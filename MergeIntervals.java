class Solution {
    public int[][] merge(int[][] intervals) {
        if(intervals.length <= 1){
            return intervals;
        }
        
        // Sorting 2D Array Using Its First Element In Every Row
        Arrays.sort(intervals, (arr1, arr2) -> Integer.compare(arr1[0], arr2[0]));
        
        //Using ArrayList To Store Final Output Because Size Of Result Is Unknown.
        List<int[]> result = new ArrayList<>();
        
        // Adding First Row In The Result ArrayList
        int[] currentElementArray = intervals[0];
        result.add(currentElementArray);
        
        // Traversing Through The Array And Comparing Current End To Next Start
        for(int[] interval : intervals){

            int currentStart = currentElementArray[0];
            int currentEnd = currentElementArray[1];
            int nextStart = interval[0];
            int nextEnd = interval[1];
            
            if(currentEnd >= nextStart){
                currentElementArray[1] = Math.max(currentEnd, nextEnd);
            }else{
                currentElementArray = interval;
                result.add(currentElementArray);
            }
            
        }
        
        // Returning A 2D Array As The Result (Return Type Being A 2D Array)
        return result.toArray(new int[result.size()][]);
        
    }
}
