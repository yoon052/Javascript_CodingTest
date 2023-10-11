function solution(n) {
    let arr = []
    let str = n.toString();
    
    arr = (str.split('')).sort((a,b) => b - a).join('');
    return parseInt(arr);    
}