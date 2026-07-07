// 4. Insertion and Deletion at the Beginning

//  - Create an array `letters` with values `['b', 'c']`. Use `unshift` to add `'a'` to the beginning of the array.

let letters = ['b', 'c'];

console.log("Original:", letters);

letters.unshift('a');
console.log("After Unshift:", letters);

// Use `shift` to remove the first element from the `letters` array.

letters.shift();
console.log("After Shift:", letters);