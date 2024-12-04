# Subtle GCD Bug in Recursive Function

This repository demonstrates a subtle bug in a seemingly straightforward recursive function designed to find the greatest common divisor (GCD) of two numbers using Euclid's algorithm.  The bug is particularly evident when one of the inputs is 0, leading to an infinite loop or unexpected results. The solution provided addresses this and ensures the function correctly handles all cases. 

## Bug Description
The function `foo` attempts to calculate the GCD recursively. However, it does not correctly handle the base case where one of the numbers is 0. This leads to infinite recursion when the input includes 0.  

## How to reproduce
1. Clone this repository.
2. Run `bug.js`. Observe the unexpected behavior or infinite loop when one of the inputs is 0.
3. Run `bugSolution.js` to see the corrected implementation.