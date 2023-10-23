// 2665. Counter II

var createCounter = function (init) {
  let presentCounter = init;

// 1st way of Solving
// function increment() {
//   return ++presentCounter;
// }

// function decrement() {
//   return --presentCounter;
// }

// function reset() {
//   return (presentCounter = init);
// }

// return { increment, decrement, reset };

// };

// 2ndway of solving
return {
    increment: () => ++presentCounter,
    decrement: () => --presentCounter,
    reset: () => presentCounter = init,
}

}
const counter = createCounter(5)
  console.log(counter.increment()); // 6
  console.log(counter.reset()); // 5
  console.log(counter.decrement()); // 4