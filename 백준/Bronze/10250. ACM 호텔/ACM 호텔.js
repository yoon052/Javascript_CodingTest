const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function Room(height, number){
    const H = parseInt(height);
    let N = parseInt(number);
    let W = 0;
    while (N > 0) {
        N -= H;
        W++;
    }
    N += H;
    console.log(N+"" + (W<10 ? "0" + W : W));
}

for(i= 1; i <= input[0]; i++){
    const answer = input[i].split(' ').map(e=>parseInt(e));
    Room(answer[0], answer[2])
}