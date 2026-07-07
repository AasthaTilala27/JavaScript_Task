let books = [

{
id:101,
bookName:"THE BOOK THIEF",
author:"Markus Zusak",
category:"Fantasy",
quantity:5
},

{
id:102,
bookName:"SILENT PATIENT",
author:"Alex Michaelides",
category:"Fantasy",
quantity:3
},

{
id:103,
bookName:"YOU REACHED SAM",
author:"Dustin Thao",
category:"Emotional",
quantity:0
}


];

const tbody = document.querySelector("tbody");
const table = document.querySelector("table");

updateCount();

function updateCount(){

document.querySelector("main").innerHTML =
"Total Books : " + books.length;

}

function displayBooks(){

table.classList.add("show");

tbody.innerHTML="";

books.forEach(book=>{

tbody.innerHTML += `

<tr>

<td>${book.id}</td>

<td>${book.bookName}</td>

<td>${book.author}</td>

<td>${book.category}</td>

<td>${book.quantity}</td>

<td>

${book.quantity>0 ?

"Available"

:

"Out Of Stock"}

</td>

</tr>

`;

});

}


document.querySelector(".display").onclick =
displayBooks;



document.querySelector(".add").onclick=function(){

let id = Number(prompt("Enter ID"));

if(books.some(book=>book.id===id)){

alert("Book ID already exists");

return;

}

let book={

id:id,

bookName:prompt("Book Name"),

author:prompt("Author"),

category:prompt("Category"),

quantity:Number(prompt("Quantity"))

};

books.push(book);

updateCount();

displayBooks();

};



document.querySelector(".search").onclick=function(){

let key = prompt(

"Enter Name, Author or Category"

);

let result = books.filter(book=>

book.bookName.toLowerCase()

.includes(key.toLowerCase())

||

book.author.toLowerCase()

.includes(key.toLowerCase())

||

book.category.toLowerCase()

.includes(key.toLowerCase())

);

if(result.length>0){

console.table(result);

alert("Books Found");

}

else{

alert("Book Not Found");

}

};



document.querySelector(".issue").onclick=function(){

let id = Number(prompt("Book ID"));

let book = books.find(

book=>book.id===id

);

if(book){

if(book.quantity>0){

book.quantity--;

alert("Book Issued");

displayBooks();

}

else{

alert("Out Of Stock");

}

}

else{

alert("Book Not Found");

}

};



document.querySelector(".return").onclick=function(){

let id = Number(prompt("Book ID"));

let book = books.find(

book=>book.id===id

);

if(book){

book.quantity++;

alert("Book Returned");

displayBooks();

}

else{

alert("Book Not Found");

}

};


document.querySelector(".delete").onclick=function(){

let id = Number(prompt("Book ID"));

books = books.filter(

book=>book.id!==id

);

updateCount();

displayBooks();

alert("Book Deleted");

};



document.querySelector(".status").onclick=function(){

let id = Number(prompt("Book ID"));

let book = books.find(

book=>book.id===id

);

if(book){

alert(

book.quantity>0 ?

"Available"

:

"Out Of Stock"

);

}

else{

alert("Book Not Found");

}

};