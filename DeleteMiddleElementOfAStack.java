// Iterative Method
class Solution
{
    //Function to delete middle element of a stack.
    public void deleteMid(Stack<Integer>s,int sizeOfStack){
        // code here
        
        Stack<Integer> tempStack = new Stack<>();
        
        int mid = sizeOfStack / 2;
        
        while(mid-- > 0){
            tempStack.push(s.pop());
        }
        s.pop();
        
        while(!tempStack.isEmpty()){
            s.push(tempStack.pop());
        }
        
    } 
}
