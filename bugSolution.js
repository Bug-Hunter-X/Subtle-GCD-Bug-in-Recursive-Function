function gcd(a, b) {
  // Handle the case where one number is 0
  if (b === 0) {
    return a;
  } else if (a === 0) {
    return b;
  } else if (a === b) {
    return a;
  } else if (a > b) {
    return gcd(a - b, b);
  } else {
    return gcd(a, b - a);
  }
}

console.log(gcd(10, 2)); // Output: 2
console.log(gcd(10, 3)); // Output: 1
console.log(gcd(15, 6)); // Output: 3
console.log(gcd(10,0)); //Output: 10
console.log(gcd(0,10)); //Output: 10