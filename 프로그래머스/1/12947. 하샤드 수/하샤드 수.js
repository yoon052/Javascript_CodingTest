function solution(x) {
    let arr = [];
    let str = x + '';
    arr = str.split('').map(Number).reduce((a,c) => a+c, 0);
    return x%arr === 0 ? true : false;    
}