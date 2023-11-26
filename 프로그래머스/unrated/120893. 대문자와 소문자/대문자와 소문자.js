function solution(my_string) {
    var answer = '';
    return [...my_string].map(v => v.toUpperCase() === v ? v.toLowerCase() : v.toUpperCase()).join('');
}