/*Complete the function(s) below*/
class GfG{
    
    int min = Integer.MAX_VALUE;
    
	public void push(int a,Stack<Integer> s)
	{
	    //add code here.
	    s.push(a);
	    min = Math.min(min, a);
	}
	public int pop(Stack<Integer> s)
        {
            //add code here.
            if(s.isEmpty()){
                return -1;
            }
            return s.pop();
	}
	public int min(Stack<Integer> s)
        {
           //add code here.
           if(s.isEmpty()) return 0;
           
           return min;
	}
	public boolean isFull(Stack<Integer>s, int n)
        {
           //add code here.
           if(s.size() == n){
               return true;
           }
           return false;
	}
	public boolean isEmpty(Stack<Integer>s)
        {
           //add code here.
           if(s.size()==0){
                return true;   
           }
           
           return false;
	}
}
