// 8. A restaurant takes orders for Breakfast, Lunch, and Dinner. Each category has 
// sub-items (e.g., Breakfast → Idli, Dosa, Paratha), and each sub-item has a different 
// price. Using a switch case with nested conditions, generate the final bill for the 
// ordered item and quantity. If the category or sub-item is invalid, display "Item not 
// available". 
// Breakfast, Lunch, Dinner
let category = "Breakfast"; 
let item = "Dosa"; 
let quantity = 2;
let price = 0;

switch (category) {
    case "Breakfast":
        switch (item) {
            case "Idli": price = 30; break;
            case "Dosa": price = 50; break;
            case "Paratha": price = 40; break;
            default: console.log("Item not available"); price = null;
        }
        break;
    case "Lunch":
        switch (item) {
            case "Thali": price = 120; break;
            case "Biryani": price = 150; break;
            case "Fried Rice": price = 100; break;
            default: console.log("Item not available"); price = null;
        }
        break;
    case "Dinner":
        switch (item) {
            case "Paneer Curry": price = 180; break;
            case "Roti": price = 20; break;
            case "Dal Tadka": price = 150; break;
            default: console.log("Item not available"); price = null;
        }
        break;
    default:
        console.log("Category not available"); price = null;
}

if (price !== null) {
    console.log(`Bill: ₹${price * quantity}`);
}


//OUTPUT:
//Bill: ₹100