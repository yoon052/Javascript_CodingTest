function solution(absolutes, signs) {
    let arr = [];
    let array = [];
    
    arr = signs.map(v => v===true ? "+" : "-");
    abs = absolutes.map(v => v.toString());
    
    for(let i =0; i<absolutes.length; i++){
        array.push(arr[i] + abs[i]);
    }
    return array.map(Number).reduce((a,c) => a+c);    
}