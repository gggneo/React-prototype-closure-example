function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

let counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2

// Closure Example.
