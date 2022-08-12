class Solution {
    public String countAndSay(int n) {
        return  (recur(n));
    }
    
    private String recur(int n){
        
        if(n == 1) return "1";
        
        String x = recur(n-1);
        
        List<int[]> list = new ArrayList<>();
        for(char c : x.toCharArray()){
            if(list.size() != 0 && list.get(list.size()-1)[0] == c){
                list.get(list.size()-1)[1]++;
            }else{
                int[] arr = new int[]{c, 1};
                list.add(arr);
            }
        }
        StringBuilder sb = new StringBuilder("");
        for(int[] a : list){
            sb.append(a[1]).append(a[0]-'0');
        }
        return sb.toString();
    }
}
// class Solution {
//     public String countAndSay(int n) {
//         if(n == 1)
//             return "1";
//         if(n==2)
//             return "11";
//         String str = "11";
        
//         for(int i = 3; i <= n; i++){
//             String temp = "";
//             str = str+'$';
//             int count = 1;
//             for(int j = 1; j < str.length(); j++){
//                 if(str.charAt(j) != str.charAt(j-1)){
//                     temp += String.valueOf(count);
//                     temp += str.charAt(j-1);
//                     count = 1;
//                 }else
//                     count++;
//             }
//             str = temp;
//         }
//         return str;
//     }
// }
