//Task-4 Bank Account

let account = {

    accountNumber : 123456,
    holderName : "Raj",
    balance : 25000

};

// 1. Display account details.
console.log(account);

//2. Deposit ₹5000 into the balance.
account.balance += 5000;

//3. Add a property `accountType`.
account.accountType = "Savings";

//4. Delete the `accountType` property.
delete account.accountType;

//5. Create a method `checkBalance()` that displays the current balance.
account.checkBalance = function(){
    console.log("Current Balance :", this.balance);

};

account.checkBalance();