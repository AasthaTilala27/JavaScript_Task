// Task 2: E-Commerce Product

let product = {

    productId : 1,
    productName : "Laptop",
    price : 50000,
    stock : 20

};

// 1. Display product details.
console.log(product);

// 2. Change the price.
product.price = 55000;

// 3. Add a property `category`.
product.category = "Electronics";

// 4. Remove the `stock` property.
delete product.stock;

// 5. Create a method `productInfo()` that displays all product information.

product.productInfo = function(){
    console.log(this);

};

product.productInfo();