let branchA = ["Alice", "Bob"];
let branchB = ["Charlie", "Diana"];

let allCustomers = branchA.concat(branchB);
console.log(`Concatation : ${allCustomers}`);

let messyData = [["Eve", "Frank"], ["Grace"], ["Hank", "Ivy"]];
let newData = messyData.flat();
console.log(`Flating: ${newData}`);

let reversed = newData.sort().reverse();
console.log(`reeserved: ${reversed}`);

let banner = allCustomers.join(" - ");
console.log(`Join : ${banner}`);

let newArray = new Array(5).fill("Closed");
console.log(`Fill : ${newArray}`);