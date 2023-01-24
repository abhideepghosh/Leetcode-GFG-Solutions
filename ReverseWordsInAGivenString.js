class Solution 
{
    //Function to reverse words in a given string.
    reverseWords(s)
    {
        // code here
        const result = s.split('.').reverse().join('.');
        return result;
    }
}
