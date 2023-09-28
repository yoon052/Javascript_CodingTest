const [a,b] = require("fs").readFileSync('/dev/stdin').toString().trim().split(' ').map(v => parseInt(v));

let N = a;
let M = b;

while(N % M !== 0){
    let i = N % M;
    if(i !== 0){
        N = M;
        M = i;
    }
}
console.log(M);
console.log(a*b/M);