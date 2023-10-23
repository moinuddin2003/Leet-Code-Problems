//Arrary Reduce Transformation

var reduce = function (nums, fn, init) {
    let res = init;
    for (let i = 0; i < nums.length; i++) {
        res = fn(res, nums[i])
    }
    return res;
}

//Test Case 1
// nums = [1, 2, 3, 4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0

// const result = reduce(nums,fn,init)
// console.log(result);

// Test Case 2
// nums = [1, 2, 3, 4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100

// const result = reduce(nums, fn, init)
// console.log(result);

// // Test Case 3
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25

const result = reduce(nums, fn, init)
console.log(result);