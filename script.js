let balance = 1000;
let transactionHistory = [];


function atmTransaction(transactionType, amount = 0) {
    if (transactionType === "Withdrawal") {
     
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            transactionHistory.push(`Withdrawal: $${amount}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    else if (transactionType === "Deposit") {
     
        if (amount > 0) {
            balance += amount;
            transactionHistory.push(`Deposit: $${amount}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    else if (transactionType === "Undo") {
       
        let lastTransaction = transactionHistory.pop();

      
        if (lastTransaction) {
            let value = Number(lastTransaction.split("$")[1]);

            if (lastTransaction.startsWith("Deposit")) {
                balance -= value;
            } else if (lastTransaction.startsWith("Withdrawal")) {
                balance += value;
            }

            console.log("Last transaction undone.");
        } else {
            console.log("No transaction to undo.");
        }
    }

    else if (transactionType === "Fee") {
      
        balance -= 10;

       
        transactionHistory.unshift("Maintenance Fee: $10");
    }

    else if (transactionType === "Clear Oldest") {
        
        let removed = transactionHistory.shift();

        if (removed) {
            console.log("Oldest transaction removed:", removed);
        } else {
            console.log("No transaction to remove.");
        }
    }

    else {
        console.log("Invalid transaction type.");
    }


    console.log("Current Balance: $" + balance);
    console.log("Transaction History:", transactionHistory);
}



atmTransaction("Deposit", 200);
atmTransaction("Withdrawal", 50);
atmTransaction("Fee");
atmTransaction("Undo");
atmTransaction("Clear Oldest");