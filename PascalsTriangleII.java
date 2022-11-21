// Optimized Solution
class Solution {
    public List<Integer> getRow(int r) {
        List<Integer> ans = new ArrayList<>();
        ans.add(1);
        long temp = 1;
        for(int i=1,up=r,down=1;i<=r;i++,up--, down++){
            temp=temp*up/down;
            ans.add((int)temp);
        }
        return ans;
    }
}



// Brute Force Solution
class Solution {
    public List<Integer> getRow(int rowIndex) {
        
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> firstRow = new ArrayList<>();
        
        firstRow.add(1);
        result.add(firstRow);
        
        if(rowIndex == 0){
            return result.get(0);
        }
        
        List<Integer> secondRow = new ArrayList<>();
        
        secondRow.add(1);
        secondRow.add(1);
        result.add(secondRow);
        
        if(rowIndex == 1){
            return result.get(1);
        }
        
        int numRows = rowIndex + 1;
        
        for(int i=2; i<numRows; i++){
            
            List<Integer> current = new ArrayList<>();
            
            for(int j=0; j<i+1; j++){

                if(j == 0){
                    current.add(1);
                }else if(j == i){
                    current.add(1);
                }else{
                    List<Integer> temp = result.get(i - 1);
                    current.add(temp.get(j - 1) + temp.get(j));
                }
            }
            
            result.add(current);
            
        }
        
        return result.get(rowIndex);
        
    }
}
