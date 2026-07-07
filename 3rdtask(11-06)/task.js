var bill = 0;

while(true){

    var choice = prompt(
        "1. Pen (₹10)\n" +
        "2. Pencil (₹5)\n" +
        "3. Bottle (₹50)\n" +
        "4. Exit\n\n" +
        "Enter Your Choice Here: "
    );

    switch(choice){

        case '1':
            var qty = Number(prompt("Enter Quantity of Pen : "));
            console.log("Total quantity of pen = " ,qty);
            var amount = qty * 10;

            if(qty > 10){
                amount = amount - (amount * 0.05);
            }

            bill += amount;
            console.log("Pen Amount = ₹" + amount);
            break;

        case '2':
            var qty = Number(prompt("Enter Quantity of Pencil : "));
            console.log("Total quantity of pencil = " ,qty);

            var amount = qty * 5;

            if(qty > 20){
                amount = amount - (amount * 0.10);
            }

            bill += amount;
            console.log("Pencil Amount = ₹" + amount);
            break;

        case '3':
            var qty = Number(prompt("Enter Quantity of Bottle : "));
            console.log("Total quantity of bottle = " ,qty);

            var amount = qty * 50;

            if(qty > 5){
                amount = amount - (amount * 0.15);
            }

            bill += amount;
            console.log("Bottle Amount = ₹" + amount);
            break;

        case '4':
            console.log("Your Total BILL Is : ");
            console.log("Total Bill = ₹" + bill);
            console.log("Thank You For Visiting!");
            break;

        default:
            console.log("Invalid Choice");
    }

    if(choice == '4'){
        break;
    }
}