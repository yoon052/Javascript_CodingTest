let input = require('fs').readFileSync('/dev/stdin');

let cnt = 0;

while(true){
    if(input % 5 === 0){
        console.log(input/5 + cnt);
        break;
    }
    if(input < 0){
        console.log(-1);
        break;
    }
    
    cnt++;
    input -= 3;
}

