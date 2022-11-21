/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Divisor Game.
Memory Usage: 38.7 MB, less than 99.07% of Java online submissions for Divisor Game.
*/
// TC: O(1) SC: O(1)
class Solution {
    public boolean divisorGame(int n) {
        return n % 2 == 0;
    }
}


/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Divisor Game.
Memory Usage: 38.8 MB, less than 94.89% of Java online submissions for Divisor Game.
*/
// TC: O(1) SC: O(1)
class Solution {
    public boolean divisorGame(int N) {
        return (N & 1) == 0;   
    }
}
