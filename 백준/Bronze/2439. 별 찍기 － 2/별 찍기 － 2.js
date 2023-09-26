let input = require('fs').readFileSync('/dev/stdin').toString();
let num = Number(input);

for(let i=0; i<num; i++){
    let answer = "";
    
    for(let j=num-1; j>=0; j--){
        answer += j <= i ? "*" : " ";
    }
    console.log(answer);
}
