/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n === 0) {
        return true;
    }
    if(flowerbed.length === 1) {
        if(n > 1) {
            return false;
        }
        else {
            return flowerbed[0] === 0 ? true : false;
        }
    } 
    for(let i=0; i<flowerbed.length; i++) {
        const plot = flowerbed[i];
        if(i === 0) {
            if(plot === 0 && flowerbed[i + 1] === 0) {
                n--;
                i++;
            }
        }
        else if(i === flowerbed.length - 1) {
            if(plot === 0 && flowerbed[i - 1] === 0) {
                n--;
                i++;
            }
        }
        else if(plot === 0 && flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
            n--;
            i++;
        }
        if(n <= 0) return true; 
    }
    return false;
};
