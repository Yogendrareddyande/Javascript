// 15. A marathon categorizes runners by completion time: under 2 hours = Elite, 2–3 hours 
// = Advanced, 3–4 hours = Intermediate, 4–5 hours = Beginner, and above 5 hours = 
// Novice. If the runner is under 18 years old, they get a special "Youth" badge in 
// addition to their category. Implement this. 

let completionTime = 2.5; // in hours
let age = 17;
let categoryName = "";

if (completionTime < 2) {
    categoryName = "Elite";
} else if (completionTime <= 3) {
    categoryName = "Advanced";
} else if (completionTime <= 4) {
    categoryName = "Intermediate";
} else if (completionTime <= 5) {
    categoryName = "Beginner";
} else {
    categoryName = "Novice";
}

if (age < 18) {
    categoryName += " + Youth Badge";
}

console.log(`Category: ${categoryName}`);


//OUTPUT:
//Category: Advanced + Youth Badge