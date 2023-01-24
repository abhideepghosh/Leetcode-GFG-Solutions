class Solution {
    longestCommonPrefix(arr,n){ 
        //code here
        let word = arr[0];
        for(let i=1; i<n; i++){
            if(!arr[i].startsWith(word)) {
                while(!arr[i].startsWith(word)) {
                    word = word.slice(0, -1);
                    if(word.length === 0) break;
                }
                if(word.length === 0) break;
            }
        }
        return word.length === 0 ? -1 :word;
    }
}
