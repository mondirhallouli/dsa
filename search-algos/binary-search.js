function biSearch(haystack, needle) {
    if (haystack.length == 0) return false;
    let low = 0, high = haystack.length - 1;
    let mid = Math.floor((low + high) / 2);

    while (haystack[mid] != needle && low <= high) {
        let midVal = haystack[mid];

        if (midVal > needle) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
        mid = Math.floor((low + high) / 2)
    }
    return haystack[mid] == needle ? true : false;
}

let scores = [12, 14, 15, 17, 20, 23];
console.log(biSearch(scores, 12))
console.log(biSearch(scores, 15))
console.log(biSearch(scores, 23))