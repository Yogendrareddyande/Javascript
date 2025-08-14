// 9. A university library charges fines based on the type of book borrowed: Fiction, 
// Non-Fiction, Reference, or Magazine. The fine per day is different for each category. 
// Using a switch case, calculate the fine based on the number of overdue days and 
// book category, applying a 50% discount if the user is a student.


let bookType = "Fiction"; 
let overdueDays = 5;
let isStudent = true;
let finePerDay = 0;

switch (bookType) {
    case "Fiction": finePerDay = 5; break;
    case "Non-Fiction": finePerDay = 6; break;
    case "Reference": finePerDay = 10; break;
    case "Magazine": finePerDay = 4; break;
    default: console.log("Invalid book type"); finePerDay = null;
}

if (finePerDay !== null) {
    let fine = finePerDay * overdueDays;
    if (isStudent) {
        fine *= 0.5;
    }
    console.log(`Fine: ₹${fine}`);
}


//OUTPUT:
//Fine: ₹12.5