/**
 * @param {string} S
 * @return {string[]}
 */

class Solution {
    find_permutation(S){
         //code here
         
         const permutations = (arr, result, store, freq) => {
             if(store.length === arr.length) {
                 result.add(store);
                 return;
             }
             for(let i=0; i<arr.length; i++) {
                 if(!freq[i]) {
                     freq[i] = true;
                     store += arr[i];
                     permutations(arr, result, store, freq);
                     store = store.slice(0, -1);
                     freq[i] = false;
                 }
             }
         }
         
         const arr = [...S];
         const result = new Set();
         let store = '';
         const freq = [];
         
         permutations(arr, result, store, freq);
         return [...result].sort();
         
    }
}




/**
 * @param {string} S
 * @return {string[]}
 */

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
