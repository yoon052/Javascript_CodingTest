function solution(arr, divisor) {
    var answer = [];
    answer = arr.sort((a,b) => a-b, 0).filter(v => v % divisor === 0);
    if(answer.length < 1) {
        answer.push(-1);
        return answer;
    }
    return answer;
}