/*
This pattern is great for comparing data within the same structure(array...)
It works only on sorted data.
*/

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum == 0) return [left, right];
        if (sum > 0) right--;
        if (sum < 0) left++;
    }
    return -1;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));