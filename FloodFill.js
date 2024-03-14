/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if(image[sr][sc] === color) return image;
    const flood = (image, sr, sc, originalColor, color) => {
        if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] !== originalColor) {
            return;
        }
        image[sr][sc] = color;
        flood(image, sr + 1, sc, originalColor, color);
        flood(image, sr - 1, sc, originalColor, color);
        flood(image, sr, sc + 1, originalColor, color);
        flood(image, sr, sc - 1, originalColor, color);
    }
    const originalColor = image[sr][sc];
    flood(image, sr, sc, originalColor, color);
    return image;
};
