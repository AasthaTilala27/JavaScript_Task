// // 1. sort() Method:
// // Write a function that sorts the array in ascending order without modifying the original array.

// let numbers = [3,1,4,1,5,9,2,6,5,3,5];
// let result = numbers.sort();

// console.log(result);

// // 2. every() Method:
// // Write a function to check if all elements in the array are even numbers using the every() method.

// function check()
// {
//     let numbers = [2,4,6,8,10];

//     let result = numbers.every(num => num % 2 == 0)
//     console.log(result,"(All number are even)");
// }

// check();


// //3. some() Method:
// // Write a function to check if there is at least one even number in the array using the some() method.
// function check()
// {
//     let numbers = [1,3,5,7,8,9];

//     let result = numbers.some(num => num % 2 === 0)
//     console.log(result,"(All number are even)");
// }

// check();


// //4.Create an array of 10 numbers and use forEach() to display each number in the console.

// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// numbers.forEach(function(num) {
//     console.log(num);
// });


// //5.Create an array of 5 numbers and use map() to create a new array containing the square of each number.

// let num = [1, 2, 3, 4, 5];

// let squares = num.map(function(num) {
//     return num * num;
// });

// console.log(squares);


//6. Create an array of numbers from 1 to 20 and use filter() to create a new array containing only odd numbers.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//                11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let oddNumbers = numbers.filter(function(num) {
//     return num % 2 !== 0;
// });

// console.log(oddNumbers);


// //7. Create an array of 10 numbers and use filter() to find all numbers greater than 50.

// let numbers = [12, 45, 67, 89, 23, 56, 78, 34, 91, 50];

// let greaterThan50 = numbers.filter(function(num) {
//     return num > 50;
// });

// console.log(greaterThan50);


// // Create an array of 8 numbers
// let numbers = [10, 25, 30, 15, 50, 8, 40, 22];

// // Multiply each number by 5 using map()
// let multiply = numbers.map(function(num) {
//     return num * 5;
// });

// // Use filter() to keep only numbers greater than 100.
// let greaterThan100 = multiply.filter(function(num) {
//     return num > 100;
// });

// //Use forEach() to display the final result in the console
// greaterThan100.forEach(function(num) {
//     console.log(num);
// });