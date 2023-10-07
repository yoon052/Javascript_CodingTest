function solution(n)
{
    return (n+'').split('').map(v => parseInt(v)).reduce((a,c) => a + parseInt(c),0);
}