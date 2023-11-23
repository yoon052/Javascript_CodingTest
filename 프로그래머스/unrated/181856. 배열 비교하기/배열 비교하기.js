function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length !== arr2.length){
        return arr1.length > arr2.length ? 1 : -1
    } else if(arr1.reduce((a,b)=>a+b,0) === arr2.reduce((a,b)=>a+b,0)) {
        return 0;
    } else {
        return arr1.reduce((a,b)=>a+b,0) > arr2.reduce((a,b)=>a+b,0) ? 1 : -1
    }
}