// 2. A food delivery app is running a complex promotion. If the order amount is more than 
// ₹1000 and the customer is a premium member, they get free delivery and an extra 
// 15% off. If the order is between ₹500 and ₹1000 and the customer has ordered on a 
// weekday between 6 PM and 8 PM, they get a ₹100 discount, but not if they’ve used a 
// coupon already. If the order is less than ₹500 and it’s Sunday morning, they get free 
// delivery only. Calculate and display the exact benefit the customer receives. 


//  Food Delivery Promotion Calculator


let orderAmount = 750;
let isPremiumMember = false;      
let day = "Monday";               
let time = 19;                    
let hasUsedCoupon = false;       
let isSundayMorning = (day === "Sunday" && time >= 6 && time < 12); 
let benefit = "";


if (orderAmount > 1000 && isPremiumMember) {
    
    let discount = orderAmount * 0.15;
    benefit = `Free delivery + ₹${discount.toFixed(2)} discount (15% off).`;
}
else if (orderAmount >= 500 && orderAmount <= 1000 && day !== "Sunday" && time >= 18 && time <= 20 && !hasUsedCoupon) {
   
    benefit = "₹100 discount.";
}
else if (orderAmount < 500 && isSundayMorning) {
    benefit = "Free delivery only.";
}
else {
    
    benefit = "No benefit.";
}
console.log(`Order Amount: ₹${orderAmount}`);
console.log(`Benefit: ${benefit}`);



//OUTPUT:
// Order Amount: ₹750
// Benefit: ₹100 discount.