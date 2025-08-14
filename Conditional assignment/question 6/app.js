// 6. A coffee shop menu has different prices for different cup sizes: small, medium, large, 
// and extra-large. Customers can choose add-ons like extra shots, flavored syrup, or 
// whipped cream, each with a fixed cost. Write a program that uses a switch case to 
// determine the total bill based on size and selected add-ons. If the selected size or 
// add-on is invalid, display an error message. 

//Coffee Shop Menu 
let size = "medium"; 
let addOns = ["extra shots", "flavored syrup"]; 

let totalBill = 0;


switch (size.toLowerCase()) {
    case "small": totalBill = 100; break;
    case "medium": totalBill = 150; break;
    case "large": totalBill = 200; break;
    case "extra-large": totalBill = 250; break;
    default:
        console.log("Invalid cup size.");
        totalBill = null;
}

if (totalBill !== null) {

    addOns.forEach(addOn => {
        switch (addOn.toLowerCase()) {
            case "extra shots": totalBill += 30; break;
            case "flavored syrup": totalBill += 20; break;
            case "whipped cream": totalBill += 25; break;
            default:
                console.log(`Invalid add-on: ${addOn}`);
        }
    });
    console.log(`Total Bill: ₹${totalBill}`);
}


//OUTPUT:
//Total Bill: ₹200