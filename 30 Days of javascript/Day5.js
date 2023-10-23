// Apply Transform Over Each Element in Array

function map(arr, fn)
{
    let transformedArr = [];
    for (let i = 0; i < arr.length; i++) {
        transformedArr[i] = fn(arr[i],i)
    }
    return transformedArr;
}

// function double(n){
//     return n*2;
// }

// const numbers = [2,4,6,8,10];

// const doubleNumbers = map(numbers,double);

// console.log(doubleNumbers);

//Test Case 1
function plusone(n) { return n + 1; }
const num1 = [1, 2, 3]
const testCase1 = map(num1,plusone)
console.log(testCase1);

// Test Case 2
function plusI(n, i) { return n + i; }
const num2 = [1, 2, 3]
const testCase2 = map(num2,plusI)
console.log(testCase2);


function constant(n, i) { return 42; }
const num3 = [10, 20, 30]
const testCase3 = map(num2, constant)
console.log(testCase3);