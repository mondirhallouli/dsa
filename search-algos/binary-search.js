/*

speed: O(log n)

*/

function biSearch(haystack, needle) {
    if (haystack.length == 0) return false;
    let low = 0;
    let high = haystack.length;
    while(low < high) {
        let mid = Math.floor((low + high) / 2);
        let currVal = haystack[mid];
        if (currVal === needle) return true;
        else if (currVal > needle) high = mid;
        else low = mid + 1;
    }
    return false;
}

let scores = [12, 14, 15, 17, 20, 23];
console.log(biSearch(scores, 12)) // true
console.log(biSearch(scores, 11)) // false
console.log(biSearch(scores, 15)) // true
console.log(biSearch(scores, 13)) // fasle
console.log(biSearch(scores, 23)) // true

