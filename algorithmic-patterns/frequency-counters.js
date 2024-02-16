/*
This algorithm pattern is good for comparing data from multiple sources.
*/

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let f1 = {};
    let f2 = {};
    for (let item of arr1) {
        f1[item] = (f1[item] ?? 0) + 1;
    }
    for (let item of arr2) {
        f2[item] = (f2[item] ?? 0) + 1;
    }

    for (let key in f1) {
        if (!(key ** 2 in f2)) return false;
        if (f1[key] !== f2[key ** 2]) return false;
    }
    return true;
}

console.log(same([2, 4, 3], [9, 4, 16]));