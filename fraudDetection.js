let dailyTransactions = [1042, 8922, 3301, 5510, 7719, 9920];
let fraudID = 5510;


console.log(`Includes Output Is: ${dailyTransactions.includes(fraudID)}`);


if (dailyTransactions.includes(fraudID)) {
    console.log(`Index Of Fraud Is : ${dailyTransactions.indexOf(fraudID)}`);
}


console.log(`slice number: ${dailyTransactions.slice(-3)}`);


if (dailyTransactions.includes(fraudID)) {
    let index = dailyTransactions.indexOf(fraudID);
    console.log(`removed number : ${dailyTransactions.splice(index, 1)}`);
    console.log (`After Removing fraudID : ${dailyTransactions}`);
}


dailyTransactions.forEach(id => {
    console.log(`Transaction ${id} cleared.`);
});