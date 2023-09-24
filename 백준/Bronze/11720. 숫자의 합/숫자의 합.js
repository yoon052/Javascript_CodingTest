let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split('');

function solution(n, arr){
    let answer = 0;
    for(let i=0; i<n; i++){
        answer += Number(arr[i]);
    }
    return answer;
}

console.log(solution(n, arr));