🏦 IronClad Banking System (JavaScript Project)
📌 Project Overview

The IronClad Banking System is a JavaScript practice project that simulates basic banking operations using core JavaScript concepts such as:

Variables and conditions
Loops
Functions
Array methods
String manipulation
Basic algorithm logic
🎯 Objectives

This project demonstrates:

ATM transaction logic
Loan processing using array methods
Fraud detection system
Bank data merging and cleanup
Password validation and yearly reporting system

📁 Project Structure
ironClad/
│
├── script.js (ATM System)
├── loanApp.js (Loan Processing)
├── fraudDetection.js (Fraud System)
├── bankMergers.js (Array Operations)
├── reportingSystem.js (Password + Reports)
└── README.md
🧠 Features
🏧 1. Smart ATM & Transaction History
Starting balance: $1000
Supports:
Deposit
Withdrawal
Undo last transaction
Maintenance Fee (unshift)
Remove oldest transaction (shift)
Tracks all transactions using array history
💳 2. Loan Processing System

Uses array methods:

.filter() → customers with score > 700
.map() → increases scores by 20
.reduce() → total risk score
.some() → checks if any score = 900
.every() → checks minimum requirement (400)
.find() → finds first risky score
.findIndex() → finds position of risky score
🚨 3. Fraud Detection System
Checks if fraud ID exists using .includes()
Finds position using .indexOf()
Gets last 3 transactions using .slice()
Removes fraud using .splice()
Prints safe transactions using .forEach()
🏦 4. Bank Mergers & Data Cleanup
.concat() → merge branches
.flat() → flatten nested arrays
.sort() → alphabetical sorting
.reverse() → Z → A order
.join() → create welcome banner string
.fill() → initialize teller windows
🔐 5. Security & Reporting System
✔ Password Validation

Rules:

At least 8 characters
Must not contain "password"
Must include at least one vowel

Returns:

"Access Granted"
"Access Denied"
📅 Yearly Report System
Loops through years
Checks leap years

Special audit years (leap years)
5-year anniversaries
10-year anniversaries
