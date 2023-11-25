function solution(sides) {
    const [long, a, b] = sides.sort((a,b) => b-a);
    return a+b > long ? 1 : 2;
}