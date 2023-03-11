class Solution 
{
    //Function to check if two strings are rotations of each other or not.
    areRotations(s1, s2)
    {
        // code here
        const str = s1 + s1;
        return str.includes(s2) && s2.length * 2 === str.length;
    }
}
