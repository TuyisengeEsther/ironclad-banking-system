
function validateBankPassword(password) {

    if (password.length < 8) {
        return "Access Denied";
    }

    if (password.toLowerCase().includes("password")) {
        return "Access Denied";
    }

    let vowels = "aeiou";
    let hasVowel = false;

    for (let char of password.toLowerCase()) {
        if (vowels.includes(char)) {
            hasVowel = true;
            break;
        }
    }

    if (!hasVowel) {
        return "Access Denied";
    }

    return "Access Granted";
}

console.log(validateBankPassword("hello123"));
console.log(validateBankPassword("pass1234"));
console.log(validateBankPassword("xyz12345"));
console.log(validateBankPassword("secure2024"));



function isLeapYear(year) {
    return (year % 400 === 0) ||
           (year % 4 === 0 && year % 100 !== 0);
}

function generateYearlyReport(startYear, endYear) {

    for (let year = startYear; year <= endYear; year++) {

        if (isLeapYear(year)) {
            console.log(`Year ${year} is a special audit year.`);
        }

        if (year % 5 === 0) {
            console.log(`${year} - 5 Year Anniversary`);
        }

        if (year % 10 === 0) {
            console.log(`${year} - Decade Anniversary`);
        }
    }
}

generateYearlyReport(1998, 2005);