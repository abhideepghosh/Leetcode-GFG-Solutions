class SmallestInfiniteSet {
    constructor() {
        this.nums = new Array(1001).fill(true);
    }
    popSmallest() {
        for(let i=1; i<this.nums.length; i++) {
            if(this.nums[i]) {
                this.nums[i] = false;
                return i;
            }
        }
        return null;
    }
    addBack(i) {
        this.nums[i] = true;
    }
}
