const calculateTax = income => {

    let tax = 0;

    switch (true) {
        case (income <= 250000):
            tax = 0;
            break;

        case (income <= 500000):
            tax = income * 0.05;
            break;

        case (income <= 1000000):
            tax = income * 0.20;
            break;

        default:
            tax = income * 0.30;
    }
    return tax;
};

console.log(calculateTax(200000));
console.log(calculateTax(400000));
console.log(calculateTax(700000));
console.log(calculateTax(1500000));