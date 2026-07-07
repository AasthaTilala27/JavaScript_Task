console.log("Before modification:");

console.log(document.querySelector("#heading").innerHTML);
console.log(document.querySelector("#paragraph").innerText);
console.log(document.querySelector("#content").textContent);


console.log("After modification:");

console.log(document.querySelector("h1").innerHTML="Welcome to JavaScript DOM");
console.log(document.querySelector("p").innerText="Learning Content Modification in JavaScript");
console.log(document.querySelector("b").textContent="Frontend Development with JavaScript");
