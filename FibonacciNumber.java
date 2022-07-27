class Solution {
    //Iterative Way --> 100% Faster, 0ms.
    public int fib(int n) {
        int solution=1;
        int count =0;
        int temp =0;
        if(n==0){
            return 0;
        }
        if(n==1){
            return 1;
        }
        for(int i=2; i<=n;i++){
            temp=solution;
            solution=solution+count;
            count=temp;
        }
        return solution;
    }
    
   /*
   // Recursive Way
   
   public int fib(int n) {
        
        if(n==0){
            return 0;
        }
        if(n==1){
            return 1;
        }
        return fib(n-1) + fib(n-2);
    }
   
   */
    
}
