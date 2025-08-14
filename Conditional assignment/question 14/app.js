// 14. An online store offers discounts: above ₹20,000 = 25%, ₹15,000–₹19,999 = 20%, 
// ₹10,000–₹14,999 = 15%, ₹5,000–₹9,999 = 10%, below ₹5,000 = no discount. If it’s 
// the customer’s birthday, add an extra 5% discount to whichever category they fall 
// into. Implement this logic

let orderValue = 18000;
let isBirthday = true;
let discountPercent = 0;

if (orderValue > 20000) {
    discountPercent = 25;
} else if (orderValue >= 15000) {
    discountPercent = 20;
} else if (orderValue >= 10000) {
    discountPercent = 15;
} else if (orderValue >= 5000) {
    discountPercent = 10;
}

if (isBirthday) {
    discountPercent += 5;
}

let finalPrice = orderValue * (1 - discountPercent / 100);
console.log(`Discount: ${discountPercent}%, Final Price: ₹${finalPrice.toFixed(2)}`);
 

//OUTPUT:
//Discount: 25%, Final Price: ₹13500.00