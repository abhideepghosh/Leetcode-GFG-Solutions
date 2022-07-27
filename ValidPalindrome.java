class Solution {
    public boolean isPalindrome(String s) {
        String res = "";
        for(char c : s.toCharArray()){
            if(Character.isDigit(c) || Character.isLetter(c)){
                res = res + c;
            }
        }
        
        res = res.toLowerCase();
        
        int leftPointer = 0;
        int rightPointer = res.length()-1;
        
        while(leftPointer <= rightPointer){
            if(res.charAt(leftPointer) != res.charAt(rightPointer)){
                return false;
            }
            
            leftPointer++;
            rightPointer--;
            
        }
        
        return true;
        
    }
}
