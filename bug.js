function foo(a, b) {
  if (a === b) {
    return true; 
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Output: true
console.log(foo(10, 3)); //Output: false
console.log(foo(15, 6));// Output: true