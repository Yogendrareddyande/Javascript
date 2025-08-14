// 1. A theme park offers tickets based on visitor categories. If the visitor is above 60 years 
// old, they get a 30% discount, but only if they are visiting during weekdays and not 
// during festival weeks. If the visitor is a student under 25 years old, they get a 20% 
// discount, but only if they have a valid student ID and the current month is not 
// December. If neither condition is met, they pay the full price, except if the day is 
// Sunday, in which case they get a flat 10% discount. Write a program that determines 
// the final ticket price for any visitor based on these conditions. 

//Theme Park Ticket Price Calculator


let basePrice = 1000;


let age = 62;                 
let isWeekday = true;        
let isFestivalWeek = false;   
let isStudent = false;        
let hasStudentID = false;     
let month = "November";       
let day = "Monday";           

let finalPrice = basePrice;


if (age > 60 && isWeekday && !isFestivalWeek) {
    
    finalPrice = basePrice * 0.70; 
    console.log("Senior citizen weekday discount applied (30%).");
}
else if (isStudent && age < 25 && hasStudentID && month !== "December") {
    
    finalPrice = basePrice * 0.80; 
    console.log("Student discount applied (20%).");
}
else if (day === "Sunday") {
    
    finalPrice = basePrice * 0.90; 
    console.log("Sunday discount applied (10%).");
}
else {
    console.log("No discount applied.");
}
console.log(`Final Ticket Price: ₹${finalPrice}`);


//OUTPUT:
//Senior citizen weekday discount applied (30%).
// Final Ticket Price: ₹700
