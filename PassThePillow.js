/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
// TC: O(1) SC: O(1)
var passThePillow = function(n, time) {
    // Calculate the effective time by reducing it within the 2 * (n - 1) cycle
    let effectiveTime = time % (2 * (n - 1));
    
    // If the effective time is less than n, the pillow is moving forward
    if (effectiveTime < n) {
        return effectiveTime + 1; // Return the current position directly
    } else {
        // If the effective time is greater than or equal to n, the pillow is moving backward
        return 2 * n - effectiveTime - 1; // Calculate the position in the reverse direction
    }
};
