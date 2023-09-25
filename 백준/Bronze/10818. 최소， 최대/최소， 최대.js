let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let arr = input[1].split(' ').map(v => Number(v));

arr.sort((a,b) => a-b);

console.log(`${arr[0]} ${arr[num-1]}`);
    
