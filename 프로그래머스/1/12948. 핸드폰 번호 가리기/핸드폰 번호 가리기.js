function solution(phone_number) {
    let answer = '';
    let str = '';
    let length = phone_number.length-4;
    
    for(let i=0; i<length; i++){
        str += '*';
    }    
    
    answer = phone_number.substr(-4);
    return str+answer;
}