/*Node class  used in the program
class Node
{
	int data;
	Node next;
	Node bottom;
	
	Node(int d)
	{
		data = d;
		next = null;
		bottom = null;
	}
}
*/
/*  Function which returns the  root of 
    the flattened linked list. */

// Time Complexity: O(N) * O(N) (Recursion Call * While Loop)
// Space Complexity: O(N) (Recursion Stack)
class GfG
{
    Node flatten(Node root)
    {
	// Your code here
	
	    // Base Condition For Recursion To Stop
	    if(root == null || root.next == null){
	        return root;
	    }
	    
	    // We Need At Minimum 2 Linked Lists To Merge Them, Hence We Start Recursion From root.next
	    root.next = flatten(root.next);
	    
	    // Calling Merge Function Which Merges 2 Lists And Makes It Into A single Linked List
	    // As Per The Question, We Need To Flatten The Linked List WIth Only Bottom Pointer As The Main Pointer
	    root = merge(root, root.next);
	    
	    // Returning The Modified Root
	    return root;
	
    }
    
    // Merge Function
    public Node merge(Node l1, Node l2){
        
        // Pointers To The 2 Linked Lists
        Node l1Pointer = l1;
        Node l2Pointer = l2;
        
        // For Storing The New Linked List Formed
        Node result = new Node(0);
        Node resultPointer = result;
        
        // Iterating Through The Linked List
        while(l1Pointer != null && l2Pointer != null){
            
            // Taking Values Of The Linked Lists
            int l1Value = (l1Pointer != null) ? l1Pointer.data : 0;
            int l2Value = (l2Pointer != null) ? l2Pointer.data : 0;
            
            // Merging The Linked Lists Based On Value Comparison
            if(l1Value < l2Value){
                resultPointer.bottom = new Node(l1Value);
                resultPointer = resultPointer.bottom;
                l1Pointer = l1Pointer.bottom;
            }else{
                resultPointer.bottom = new Node(l2Value);
                resultPointer = resultPointer.bottom;
                l2Pointer = l2Pointer.bottom;
            }
            
        }
        
        // If One List Hits Null And The Other One Still Remains, We Merge The List WIth Values Remaining
        if(l1Pointer != null){
            resultPointer.bottom = l1Pointer;
        }
        
        if(l2Pointer != null){
            resultPointer.bottom = l2Pointer;
        }
        
        // Returning The Final List
        return result.bottom;
        
    }
    
}
