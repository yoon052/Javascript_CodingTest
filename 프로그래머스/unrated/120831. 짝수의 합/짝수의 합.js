function solution(n) {
    let sum = 0;
    for(let i=0; i<=n; i+=2) {
        if(i%2 === 0) sum += i;
    }
    return sum;
}