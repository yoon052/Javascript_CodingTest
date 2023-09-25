let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let letters = input[0].split('');

console.log(letters[Number(input[1])-1]);



