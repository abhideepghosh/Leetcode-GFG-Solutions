class Solution {
    boolean checkTriplet(int[] arr, int n) {
        // code here
        
        HashSet<Integer> set = new HashSet<>();
        for(int i=0; i<n; i++){
            set.add(arr[i]*arr[i]);
        }
        for(int i=0;i<n;i++){
            for(int j=0; j<n; j++){
                if(i!=j){
                    if(set.contains(arr[i]*arr[i] + arr[j]*arr[j])){
                        return true;
                    }
                }
            }
        }
        return false;
        
        //Brute Force Solution
        // for(int i=0; i<n; i++){
        //     for(int j=0; j<n; j++){
        //         for(int k=0; k<n; k++){
        //             if(i != j && i!=k && j!=k && j!=i && k!=i && k!=j){
        //                 if(arr[i]*arr[i] == arr[j]*arr[j] + arr[k]*arr[k]){
        //                     return true;
        //                 }
        //             }
        //         }
        //     }
        // }
        // return false;
    }
}
