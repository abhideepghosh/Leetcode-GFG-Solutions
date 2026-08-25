/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// TC: O(N) SC: O(N)
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    const map = new Map();
    const set = new Set();
    for(let i=0; i<s.length; i++) {
        if(map.has(s[i]) && map.get(s[i]) !== t[i]) return false;      
        if(!map.has(s[i]) && set.has(t[i])) return false;
        map.set(s[i], t[i]);
        set.add(t[i]);
    }
    return true;
};


// TC: O(N) SC: O(N) -> Faster Solution but less readable
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    const mapS = [];
    const mapT = [];
    for(let i=0; i<s.length; i++) {
        const sIndex = s.charCodeAt(i);
        const tIndex = t.charCodeAt(i);
        if(mapS[sIndex] !== mapT[tIndex]) return false;
        mapS[sIndex] = i + 1;
        mapT[tIndex] = i + 1;
    }
    return true;
};

