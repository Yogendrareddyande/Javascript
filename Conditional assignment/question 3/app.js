// 3. A bank is offering different loan interest rates. If the loan amount is above ₹10 lakhs 
// and the borrower’s credit score is above 800, the interest rate is 7%. If the credit 
// score is between 650 and 800 and the borrower’s income is more than ₹50,000 per 
// month, the interest rate is 9%. If the borrower is a government employee, the interest 
// rate is reduced by an additional 0.5% in both cases. If none of these apply but the 
// borrower is taking a loan in December, a 1% festival discount is given. Write a 
// program to calculate the applicable interest rate.

//  Loan Interest Rate Calculator


let loanAmount = 1200000;      
let creditScore = 820;         
let monthlyIncome = 60000;     
let isGovtEmployee = true;     
let month = "December";        


let interestRate = 0;


if (loanAmount > 1000000 && creditScore > 800) {
    interestRate = 7; 
    if (isGovtEmployee) {
        interestRate -= 0.5; 
    }
}
else if (creditScore >= 650 && creditScore <= 800 && monthlyIncome > 50000) {
    interestRate = 9; 
    if (isGovtEmployee) {
        interestRate -= 0.5; 
    }
}
else if (month === "December") {
    
    interestRate = 10 - 1; 
}
else {
    
    interestRate = 10; 
}

console.log(`Loan Amount: ₹${loanAmount}`);
console.log(`Credit Score: ${creditScore}`);
console.log(`Monthly Income: ₹${monthlyIncome}`);
console.log(`Government Employee: ${isGovtEmployee}`);
console.log(`Month: ${month}`);
console.log(`Applicable Interest Rate: ${interestRate}%`);


// OUTPUT:
// Loan Amount: ₹1200000
// Credit Score: 820
// Monthly Income: ₹60000
// Government Employee: true
// Month: December
// Applicable Interest Rate: 6.5%