/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    let value = dividend / divisor;
    if(value < 0){
        if(value <= -2147483648){
            value = -2147483648;
        }else{
            value = Math.ceil(value);
        }
    }else{
        if(value >= 2147483647){
            value = 2147483647;
        }
        else{
            value = Math.floor(value);
        }
    }

    return value;
};
