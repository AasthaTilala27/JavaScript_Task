//6. Updating an Array

//- Start with an array `names` containing `[ 'John', 'Jane', 'Doe' ]`.

let names = ['John', 'Jane', 'Doe'];

console.log("Original:", names);

// Use `push` to add `'Smith'` to the end of the array.

names.push('Smith');
console.log("After Push:", names);

// Use `pop` to remove the last element of the array.

names.pop();
console.log("After Pop:", names);

//  Use `unshift` to add `'Alice'` to the beginning of the array.

names.unshift('Alice');
console.log("After Unshift:", names);

// Use `shift` to remove the first element of the array.

names.shift();
console.log("After Shift:", names);