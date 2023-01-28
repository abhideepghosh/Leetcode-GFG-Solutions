// Your code here
const readline = require('readline');
  
const rl = readline.createInterface({
  input: process.stdin
});
const data = [];
rl.on('line', (inputData) => {
    data.push(inputData);
});

rl.on('close', () => {
    console.log(data);
});
