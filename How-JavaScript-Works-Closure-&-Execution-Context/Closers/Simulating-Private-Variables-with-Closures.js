function createBankAccount() {
    let balance = 0;
    let transactionHistory = [];

    return {
        deposit: function (amount) {
            balance += amount;
            transactionHistory.push({ type: "Deposit", amount });
            console.log("Deposited:", amount);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
            } else {
                balance -= amount;
                transactionHistory.push({ type: "Withdraw", amount });
                console.log("Withdrawn:", amount);
            }
        },
        checkBalance: function () {
            console.log("Current balance:", balance);
        },
        getTransactionHistory: function () {
            console.log("Transaction History:", transactionHistory);
        }
    };
}

const account = createBankAccount();

account.deposit(500);
account.withdraw(200);
account.withdraw(400);
account.getTransactionHistory();
