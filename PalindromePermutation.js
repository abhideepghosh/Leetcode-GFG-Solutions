function permutePalindrome(st){
    const map = new Map();
    for(let str of st) {
        map.set(str, map.has(str) ? map.get(str) + 1 : 1);
    }
    let count = 0;
    for(let [key, value] of map) {
        if(Math.floor(value % 2) !== 0) {
            count++;
        }
        if(count > 1) return false;
    }
    return true;
}

export {
    permutePalindrome
}
