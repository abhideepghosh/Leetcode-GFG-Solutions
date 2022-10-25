class Solution {
    public boolean haveConflict(String[] event1, String[] event2) {
        
        int num1 = 0;
        int num2 = 0;
        
        int num3 = 0;
        int num4 = 0;
        
        
            for(char c : event1[0].toCharArray()){
                if(Character.isDigit(c)){
                    num1 = 10*num1 + Integer.parseInt(c + "");
                }
            }
            for(char c : event2[0].toCharArray()){
                if(Character.isDigit(c)){
                    num3 = 10*num3 + Integer.parseInt(c + "");
                }
            }
            
            for(char c : event1[1].toCharArray()){
                if(Character.isDigit(c)){
                    num2 = 10*num2 + Integer.parseInt(c + "");
                }
            }
        for(char c : event2[1].toCharArray()){
                if(Character.isDigit(c)){
                    num4 = 10*num4 + Integer.parseInt(c + "");
                }
            }
        
        if((num1 < num3 && num2 < num3) || (num1 > num4 && num2 > num4)){
            return false;
        }else{
            return true;
        }
    }
}
