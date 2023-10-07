function solution(n)
{
    var answer = [];
    answer = (n.toString().split(''));   
    return answer.map(v => Number(v)).reduce((a,c)=>a+c);
}