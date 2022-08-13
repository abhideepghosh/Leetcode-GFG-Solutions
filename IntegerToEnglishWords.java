class Solution {
    private final String[] LESS_THAN_TWENTY = {"", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ", "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen "};
    private final String[] TWENTY_TO_NINETY = {"", "", "Twenty ", "Thirty ", "Forty ", "Fifty ", "Sixty ", "Seventy ", "Eighty ", "Ninety "};
    private final String[] THOUSANDS = {"", "Thousand ", "Million ", "Billion "};
    
    public String numberToWords(int num) {
        if (num == 0) {
            return "Zero";
        }
        StringBuilder res = new StringBuilder();
       
        for (int i = 3; i > 0; i--) {
            int n = (int) Math.pow(1000, i);
            if (num >= n) {
                res.append(getSymbol(num / n)).append(THOUSANDS[i]);
                num %= n;
            }
        }

        res.append(getSymbol(num));
        return res.toString().trim();                                                
    } 
    private String getSymbol(int num) {
        StringBuilder str = new StringBuilder();
        if (num >= 100) {
            str.append(LESS_THAN_TWENTY[num / 100]).append("Hundred ");
            num %= 100;
        }
        if (num >= 20) {
            str.append(TWENTY_TO_NINETY[num / 10]).append(LESS_THAN_TWENTY[num % 10]);
        } else {
            str.append(LESS_THAN_TWENTY[num]);
        }
        return str.toString();
    }
}
