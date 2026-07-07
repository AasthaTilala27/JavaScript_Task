//a) Without Argument & Without Return Type
//Q1. Write a named function to print "Hello World".

function printHello() {
    console.log("Hello World");
}
printHello();


// Q2. Write a named function to display numbers 1 to 5.(for loop)

function printData(){
    //code
    for (let i = 1; i <= 5; i++) {
       console.log(i);
    }
}
printData();



//b) With Argument & Without Return Type
// Q3. Write a named function that prints a given name.

function numberPrint(n1){
    console.log(n1);
}

numberPrint(12);


// Q4. Write a named function that prints the multiplication table of a given number.

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " * " + i + " = " + (num * i));
    }
}
printTable(5);



//c) Without Argument & With Return Type
// Q5. Write a named function that returns today's date.

function today(){
    return Date();   //Date Module -> In-built
}

console.log(today());

console.log(Date.now());


// Q6. Write a named function that returns a random number between 1 and 100.

function randomNumber() {
    return parseInt(Math.random() * 100) + 1;
}

console.log(randomNumber());

//d) With Argument & With Return Type
// Q7. Write a named function that returns the sum of two numbers.

function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(10, 20));


//Q8. Write a named function that returns the square of a given number.

function square(num){
    return num*num;
}

console.log(square(4));
console.log(square(14));


// Q9. Write a named function that returns the factorial of a number.

function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++)
   {
        fact = fact * i;
    }

    return fact;
}

console.log(factorial(5));
console.log(factorial(6)); 


// Q10. Write a named function that checks whether a string is a palindrome
// and returns true or false.

function isPeli(str) {
    var revstr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revstr += str[i];
    }
    if (revstr == str)
        return true; 
    else
        return false;

}

console.log(isPeli('madam'));