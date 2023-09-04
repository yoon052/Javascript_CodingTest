function solution(n) { 
    return n.toString().split('').reduce((a,c) => a+ Number(c), 0);
}

/*

function solution2(n) { 
    var answer = 0;
    while(n>0){
        answer += (n%10);
        n = Math.floor(n/10);
    }
    return answer;
}

*/
