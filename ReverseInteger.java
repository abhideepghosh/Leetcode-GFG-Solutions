class Solution {
    public int reverse(int x) {
        
        int nums=0;
        
        while(x!=0){
            
            if(nums>Integer.MAX_VALUE/10 || nums< Integer.MIN_VALUE/10){
                return 0;
            }
            
            nums = nums*10 + x%10;
            x = x/10;
        }
        
        return nums;
        
    }
}

/*
class Solution {
    public int reverse(int x) {
        StringBuilder str = new StringBuilder();
        str.append(x);
        if(str.charAt(0) == '-'){
            str.deleteCharAt(0);
            str = str.reverse();
            str.insert(0,'-');
            if(Long.parseLong(str.toString()) >Integer.MAX_VALUE || 
              Long.parseLong(str.toString()) <Integer.MIN_VALUE){
                return 0;
            }
            return Integer.parseInt(str.toString());
        }else{
            str = str.reverse();
            if(Long.parseLong(str.toString()) >Integer.MAX_VALUE || 
              Long.parseLong(str.toString()) <Integer.MIN_VALUE){
                return 0;
            }
            return Integer.parseInt(str.toString());
        }
    }
}
*/
