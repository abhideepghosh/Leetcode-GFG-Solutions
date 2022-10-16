class Solution {
    public boolean sumOfNumberAndReverse(int num) {
        for(int i=0; i<=num; i++){
            
            StringBuilder str = new StringBuilder();
            str.append(i+"");
            String t = str.toString();
            str.reverse();
            
            int palin1 = Integer.parseInt(str.toString());
            int palin2 = Integer.parseInt(t);
            
            if(palin1 + palin2 == num){
                return true;
            }
            
        }
        
        return false;
        
    }
}
