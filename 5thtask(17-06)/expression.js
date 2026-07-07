// 1. Build a modular billing system using functions.

let billing = function (price, quantity) {

    let total = price * quantity;
    let gst = total * 0.18;
    let finalBill = total + gst;

    console.log("Total Amount :", total);
    console.log("GST (18%) :", gst);
    console.log("Final Bill :", finalBill);

}
billing(500, 4);


// 2. Check if a number is Perfect using function.

let perfectNumber = function (num) {

    let sum = 0;

    for (let i = 1; i < num; i++) {

        if (num % i == 0) {
            sum += i;
        }

    }

    if (sum == num) {
        return "Perfect Number";
    }
    else {
        return "Not Perfect Number";
    }

}

console.log(perfectNumber(28));
console.log(perfectNumber(15));