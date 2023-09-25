let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(v => Number(v));
let max = input[0];
let n = 0;

for(let i=1; i<9; i++){
    if(input[i] > max){
        max = input[i];
        n = i;
    } 
}

console.log(max);
console.log(n+1);