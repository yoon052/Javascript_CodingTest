function solution(array) {
    array.sort((a,b) => a-b);
    let i = Math.ceil(array.length / 2)-1;
    return array[i];
}