//7. Array Length Changes

// - Create an array `fruits` with values `['apple', 'orange', 'banana']`.
  
let fruits = ['apple', 'orange', 'banana'];

console.log("Original:", fruits);

// Use `push` to add `'grape'` to the end of the array.

fruits.push('grape');
console.log("After Push:", fruits);

// Use `pop` to remove `'grape'` from the array.

fruits.pop();
console.log("After Pop:", fruits);

// Use `unshift` to add `'pear'` to the beginning of the array.

fruits.unshift('pear');
console.log("After Unshift:", fruits);

// - Use `shift` to remove `'pear'` from the array.

fruits.shift();
console.log("After Shift:", fruits);