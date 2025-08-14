// 4. An e-commerce website calculates shipping charges based on the destination and 
// delivery speed. If the delivery is within the same city and the item is marked as 
// "priority", delivery is free if the order value exceeds ₹2000, otherwise it costs ₹50. If 
// the delivery is outside the city but within the same state, shipping costs ₹100 unless 
// the order value exceeds ₹5000. If the delivery is to another state, it costs ₹200, but if 
// the customer is a premium member and orders on a weekend, it’s reduced to ₹100. 
// Implement this logic.


// E-Commerce Shipping Charge Calculator 


let isSameCity = false;       
let isPriority = false;       
let orderValue = 5500;        
let isSameState = true; 
let isPremiumMember = true;   
let day = "Saturday";         


let shippingCost = 0;

if (isSameCity && isPriority) {
    
    if (orderValue > 2000) {
        shippingCost = 0; 
    } else {
        shippingCost = 50;
    }
}
else if (!isSameCity && isSameState) {
   
    if (orderValue > 5000) {
        shippingCost = 0; 
    } else {
        shippingCost = 100;
    }
}
else if (!isSameCity && !isSameState) {
    if (isPremiumMember && (day === "Saturday" || day === "Sunday")) {
        shippingCost = 100; 
    } else {
        shippingCost = 200;
    }
}
else {
    
    shippingCost = 200; 
}

console.log(`Order Value: ₹${orderValue}`);
console.log(`Same City: ${isSameCity}`);
console.log(`Priority: ${isPriority}`);
console.log(`Same State: ${isSameState}`);
console.log(`Premium Member: ${isPremiumMember}`);
console.log(`Day: ${day}`);
console.log(`Shipping Cost: ₹${shippingCost}`);


//OUTPUT:
// Order Value: ₹5500
// Same City: false
// Priority: false
// Same State: true
// Premium Member: true
// Day: Saturday
// Shipping Cost: ₹0