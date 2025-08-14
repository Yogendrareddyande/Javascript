// 5. A gym charges monthly fees based on membership type and attendance. If the 
// member is in the "Gold" plan and attends more than 20 days a month, they get ₹500 
// cashback. If they’re in the "Silver" plan and attend more than 15 days, they get ₹300 
// cashback, but only if they pay through UPI. If the member is in the "Bronze" plan, 
// they only get a ₹100 cashback if they attend more than 10 days and pay via debit 
// card. Calculate the final payable amount.


//  Gym Monthly Fee Calculator


let membershipType = "Silver"; 
let attendanceDays = 18;       
let paymentMethod = "UPI";     
let monthlyFee = 2000;         

let cashback = 0;


if (membershipType === "Gold" && attendanceDays > 20) {
    cashback = 500;
}
else if (membershipType === "Silver" && attendanceDays > 15 && paymentMethod === "UPI") {
    cashback = 300;
}
else if (membershipType === "Bronze" && attendanceDays > 10 && paymentMethod === "Debit Card") {
    cashback = 100;
}


let finalAmount = monthlyFee - cashback;


console.log(`Membership Type: ${membershipType}`);
console.log(`Attendance Days: ${attendanceDays}`);
console.log(`Payment Method: ${paymentMethod}`);
console.log(`Monthly Fee: ₹${monthlyFee}`);
console.log(`Cashback: ₹${cashback}`);
console.log(`Final Payable Amount: ₹${finalAmount}`);

//OUTPUT:
// Membership Type: Silver
// Attendance Days: 18
// Payment Method: UPI
// Monthly Fee: ₹2000
// Cashback: ₹300
// Final Payable Amount: ₹1700
