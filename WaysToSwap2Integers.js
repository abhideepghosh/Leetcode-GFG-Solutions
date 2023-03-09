let a = 10;
let b = 20;
// Method 1
[a, b] = [b, a];
// Method 2
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// Method 3
// a = a + b;
// b = a - b;
// a = a - b;
// Method 4
// const temp = a;
// a = b;
// b = temp;
console.log(`Value of a: ${a} && Value of b: ${b}`);
