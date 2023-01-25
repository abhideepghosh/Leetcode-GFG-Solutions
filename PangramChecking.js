class Solution
{
    //Function to check if a string is Pangram or not.
    checkPangram(str)
    {
        // code here
        const set = new Set();
        [...str].forEach((c) => {
            c = c.toLowerCase();
            if(c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)) {
                set.add(c);
            }
        });
        return set.size === 26;
    }
}
