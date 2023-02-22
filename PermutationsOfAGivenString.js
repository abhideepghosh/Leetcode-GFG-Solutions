class Solution {
    find_permutation(S){
         //code here
         
         const permutation = (arr, store, result, freq) => {
             if(store.length === arr.length) {
                 result.add(store.join(''));
                 return;
             }
             for(let i=0; i<arr.length; i++) {
                 if(!freq[i]) {
                     freq[i] = true;
                     store.push(arr[i]);
                     permutation(arr, store, result, freq);
                     store.pop();
                     freq[i] = false;
                 }
             }
         }
         
         const strArray = [...S];
         const result = new Set();
         const store = [];
         const freq = [];
         
         permutation(strArray, store, result, freq);
         return [...result].sort();
         
    }
}
