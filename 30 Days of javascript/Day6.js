// 2634. Filter Elements from Array

var filter = function (arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// TestCase1
// arr = [0, 10, 20, 30], fn = function greaterThan10(n) { return n > 10; }

// const result = filter(arr, fn);
// console.log(result);

// TestCase2
// arr = [1, 2, 3], fn = function firstIndex(n, i) { return i === 0; }

// const result = filter(arr, fn);
// console.log(result);

//TestCase3
arr = [-2, -1, 0, 1, 2], fn = function plusOne(n) { return n + 1 }

const result = filter(arr, fn);
console.log(result);