// TC: O(1) SC: O(n)
class Solution {
    public static String intToRoman(int num) {
        
        // Creating Dictionary For Possible Outcomes
        String M[] = {"", "M", "MM", "MMM"};
        String C[] = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
        String X[] = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
        String I[] = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
        
        // Returning Result Based On The Max Constraints
        return M[num/1000] + C[(num%1000)/100] + X[(num%100)/10] + I[num%10];
        
    }
}
