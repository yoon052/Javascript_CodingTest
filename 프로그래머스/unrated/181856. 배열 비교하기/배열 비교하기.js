const solution = (arr1, arr2) => {
    return arr1.length !== arr2.length ? compare(arr1.length, arr2.length) : compare(arr1, arr2, "reduce");
}

const compare = (a, b, option) => {
    if(option === "reduce"){
        a = a.reduce((x,y) => x + y, 0);
        b = b.reduce((x,y) => x + y, 0);
    }
    return a > b ? 1 : a < b ? -1 : 0;
}