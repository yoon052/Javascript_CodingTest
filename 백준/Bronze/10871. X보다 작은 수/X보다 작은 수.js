let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

let a = input[0].split(' ').map(v => Number(v));
const max = a[1];

let numbers = input[1].split(' ').map(v => Number(v));

let answer = "";

for(let i = 0; i < numbers.length; i++){
    if(numbers[i]<max) {
        answer += numbers[i];
        answer += " ";
    }
}

console.log(answer.trim());
