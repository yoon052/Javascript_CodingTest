let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = [];

input.forEach(v => {
    const num = v % 42;
    
    if(answer.indexOf(num)===-1){
        answer.push(num);
    }
});

console.log(answer.length);