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



// Recursive Method
class Solution
{
    //Function to delete middle element of a stack.
    public void deleteMid(Stack<Integer>s,int sizeOfStack){
        // code here
        
        if(s.isEmpty()){
            return;
        }
        
        recursiveDeleteMid(s, sizeOfStack, 0);
        
    }
    
    public static void recursiveDeleteMid(Stack<Integer> stack, int sizeOfStack, int count){
        
        if(count >= sizeOfStack/2){
            stack.pop();
            return;
        }
        
        int currentValue = stack.peek();
        stack.pop();
        
        recursiveDeleteMid(stack, sizeOfStack, count + 1);
        
        stack.push(currentValue);
        
    }
    
}
