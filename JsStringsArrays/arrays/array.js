// ------------------ Arrays Basics ------------------

const numbers = [1, 2, 3, 4, 5]; 
console.log("Type of numbers:", typeof numbers); // object

const fruits = new Array('Apple', 'Banana', 'Orange');
console.log("Type of fruits:", typeof fruits); // object

console.log("Numbers length:", numbers.length); 
console.log("First fruit:", fruits[0]); 
console.log("Second fruit using at():", fruits.at(1)); 


// ------------------ Array Methods ------------------

const productCategories = ["laptop", "Mobiles", "Furniture", "Groceries"];
productCategories.push("Electronics", "Fashion");
console.log("After push:", productCategories);

const popped = productCategories.pop();
console.log("Popped:", popped);

const shifted = productCategories.shift();
console.log("Shifted:", shifted);

productCategories.unshift("Fashion", "Laptop");
console.log("After unshift:", productCategories);

const sliced = productCategories.slice(0, 5);
console.log("Sliced categories:", sliced);

sliced.splice(2, 1, "NewItem", "AnotherItem");
console.log("After splice:", sliced);


// ------------------ Map Example ------------------

const numList = [10, 20, 30, 40, 50];
const squaredNums = numList.map(num => num * num);
console.log("Squared numbers:", squaredNums);


// ------------------ Product Data ------------------

const productInformation = [
    { id: 1, name: "Wireless Bluetooth Headphones", category: "Electronics", brand: "Sony", actualPrice: 5999, discountedPrice: 4499, inStock: true, image: "https://picsum.photos/id/1011/400/400" },
    { id: 2, name: "Smart LED TV 43 inch", category: "Electronics", brand: "Samsung", actualPrice: 28999, discountedPrice: 23999, inStock: true, image: "https://picsum.photos/id/1015/400/400" },
    { id: 3, name: "Running Shoes", category: "Footwear", brand: "Nike", actualPrice: 3999, discountedPrice: 2999, inStock: true, image: "https://picsum.photos/id/1020/400/400" },
    { id: 4, name: "Stainless Steel Water Bottle", category: "Home & Kitchen", brand: "Milton", actualPrice: 899, discountedPrice: 599, inStock: true, image: "https://picsum.photos/id/1025/400/400" },
    { id: 5, name: "Gaming Laptop", category: "Computers", brand: "Asus", actualPrice: 99999, discountedPrice: 84999, inStock: true, image: "https://picsum.photos/id/1035/400/400" },
];


// ------------------ Render Products ------------------

function renderProducts(products) {
    const productContainer = document.getElementById("productContainer");

    const productCards = products.map(product => `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.discountedPrice} 
                <strike>₹${product.actualPrice}</strike>
            </p>
            <button>Add to Cart</button>
        </div>
    `);

    productContainer.innerHTML = productCards.join("");
}

renderProducts(productInformation);


// ------------------ Filter Example ------------------

const numbersList = [10, 25, 30, 45, 50, 60, 75, 80, 90, 100];
const greaterThan50 = numbersList.filter(num => num > 50);
console.log("Numbers > 50:", greaterThan50);

const midRangeProducts = productInformation.filter(p => p.actualPrice >= 2000 && p.actualPrice <= 5000);
console.log("Products between 2000-5000:", midRangeProducts);


// ------------------ Reduce Example ------------------

const total = numbersList.reduce((acc, val) => acc + val, 0);
console.log("Sum of numbers:", total);

const totalMidRangePrice = midRangeProducts.reduce((acc, p) => acc + p.actualPrice, 0);
console.log("Total price of mid-range products:", totalMidRangePrice);


// ------------------ Other Methods ------------------

console.log("Filled array:", numbersList.fill(0));
console.log("Concatenated array:", numbersList.concat([110, 120, 130]));

const unsorted = [5, 3, 8, 1, 2];
console.log("Ascending:", [...unsorted].sort((a, b) => a - b));
console.log("Descending:", [...unsorted].sort((a, b) => b - a));
