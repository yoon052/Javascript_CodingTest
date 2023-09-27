const input = require('fs').readFileSync('/dev/stdin');

let range = 1, block = 1;

while(block < input){
    block += range * 6;
    
    range++;
}

console.log(range);
