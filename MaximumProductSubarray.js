var maxProduct = function(nums) {
    
    let currentMaxProduct = nums[0];
    let currentMinProduct = nums[0];
    let previousMaxProduct = nums[0];
    let previousMinProduct = nums[0];
    let result = nums[0];

    for(let i=1; i<nums.length; i++) {
        const num = nums[i];
        currentMaxProduct = Math.max(previousMaxProduct * num, previousMinProduct * num, num);
        currentMinProduct = Math.min(previousMaxProduct * num, previousMinProduct * num, num);
        result = Math.max(result, currentMaxProduct);
        previousMaxProduct = currentMaxProduct;
        previousMinProduct = currentMinProduct;
    };
    return result;
};
