class Solution{
    rearrange(arr,n){
        //code here
        if(arr.length === 2) {
            if(arr[0] < 0) {
                return [arr[1], arr[0]];
            }
            else return arr;
        }
        let result = [];
        let positiveIndex = 0;
        let negativeIndex = 1;
        arr.forEach((num) => {
            
            
            if(num >= 0) {
                result[positiveIndex] = num;
                positiveIndex += 2;
            }
            else {
                result[negativeIndex] = num;
                negativeIndex += 2;
            }
            
            
        });
        
        result = result.filter((num) => num !== undefined);
        
        return result;
        
        
        
    }
}
