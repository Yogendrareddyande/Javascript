// 12. A company calculates bonuses based on years of experience: more than 15 years = 
// ₹50,000, 10–15 years = ₹30,000, 5–9 years = ₹20,000, 2–4 years = ₹10,000, and 
// less than 2 years = ₹5,000. If the employee joined in December, they get an extra 
// ₹2000 bonus regardless of experience. Write the program.

let yearsExperience = 3;
let joinedMonth = "December";
let bonus = 0;

if (yearsExperience > 15) {
    bonus = 50000;
} else if (yearsExperience >= 10) {
    bonus = 30000;
} else if (yearsExperience >= 5) {
    bonus = 20000;
} else if (yearsExperience >= 2) {
    bonus = 10000;
} else {
    bonus = 5000;
}

if (joinedMonth === "December") {
    bonus += 2000;
}

console.log(`Bonus: ₹${bonus}`);


//OUTPUT:
//Bonus: ₹12000
