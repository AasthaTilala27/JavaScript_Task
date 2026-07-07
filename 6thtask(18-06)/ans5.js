// 5.Array Reversal

//Create an array `original` with values `[1, 2, 3, 4, 5]`. Use `pop` and `unshift` to reverse the elements in place (without creating a new array).

let original = [1, 2, 3, 4, 5];

console.log("Original Array:", original);

let size = original.length;

for (let i = 0; i < size - 1; i++) {
    original.unshift(original.pop());
}

console.log("Reversal Array:", original);