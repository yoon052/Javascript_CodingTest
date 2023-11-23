function solution(num_list) {
    var answer = 0;
    if(num_list.filter(v => v<0)){
        return num_list.indexOf(num_list.find(v => v<0));
    } else {
        return -1;
    }
}