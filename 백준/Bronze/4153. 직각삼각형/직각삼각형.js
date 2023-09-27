let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i => i.split(' ').map(Number));

function solution(input){
    for(let i=0; i<input.length-1; i++){
        input[i].sort((a,b) => a-b);
        [a,b,c] = input[i];
        a**2 + b**2 === c**2 ? console.log("right") : console.log("wrong");
    }
}

solution(input);