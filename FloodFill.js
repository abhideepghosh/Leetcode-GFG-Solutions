/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const floodItUp = (image, sr, sc, originalColor, color) => {
    if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] !== originalColor) {
        return;
    }
    image[sr][sc] = color;
    const outputs = [
        {
            sr: sr + 1,
            sc: sc
        },
        {
            sr: sr - 1,
            sc: sc
        },
        {
            sr: sr,
            sc: sc + 1
        },
        {
            sr: sr,
            sc: sc - 1
        },
    
    ];
    outputs.forEach((output) => floodItUp(image, output.sr, output.sc, originalColor, color));
}

var floodFill = function(image, sr, sc, color) {
    if(image[sr][sc] === color) return image;
    originalColor = image[sr][sc];
    floodItUp(image, sr, sc, originalColor, color);
    return image;
};
