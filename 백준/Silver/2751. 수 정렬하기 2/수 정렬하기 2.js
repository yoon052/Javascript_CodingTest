let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input){
    input.shift();
    
    let arr = input.map(Number);
    let sortArr = arr.sort((a,b) => a-b);
    
    console.log(sortArr.join("\n"));
}

solution(input);