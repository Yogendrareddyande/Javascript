// 10. An online movie booking system has categories: Standard, Premium, VIP, and 
// Balcony. Each has a fixed ticket price, and booking during weekends increases the 
// price by 20%. Using a switch case, determine the final amount the user needs to 
// pay based on their category choice and whether it’s a weekday or weekend.

// Standard, Premium, VIP, Balcony
let category = "VIP"; 
let isWeekend = true;
let ticketPrice = 0;

switch (category) {
    case "Standard": ticketPrice = 150; break;
    case "Premium": ticketPrice = 250; break;
    case "VIP": ticketPrice = 400; break;
    case "Balcony": ticketPrice = 300; break;
    default: console.log("Invalid category"); ticketPrice = null;
}

if (ticketPrice !== null) {
    if (isWeekend) {
        ticketPrice *= 1.2; 
    }
    console.log(`Final Ticket Price: ₹${ticketPrice}`);
}


//OUTPUT:

//Final Ticket Price: ₹480