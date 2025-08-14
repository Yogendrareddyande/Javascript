// 7. A mobile recharge system offers different plans: Talktime, Data Pack, Combo Pack, 
// and Unlimited Plan. Each plan has a different cost and validity. Using a switch 
// case, calculate the remaining validity days after a recharge, considering that if the 
// recharge date is during a special week (given by the user), validity increases by 2 
// days for all plans. 

 // Talktime, Data Pack, Combo Pack, Unlimited Plan
let plan = "Combo Pack";
let isSpecialWeek = true;

let validityDays = 0;

switch (plan) {
    case "Talktime": validityDays = 28; break;
    case "Data Pack": validityDays = 30; break;
    case "Combo Pack": validityDays = 35; break;
    case "Unlimited Plan": validityDays = 90; break;
    default:
        console.log("Invalid plan");
        validityDays = null;
}

if (validityDays !== null) {
    if (isSpecialWeek) {
        validityDays += 2;
    }
    console.log(`Plan: ${plan}, Validity: ${validityDays} days`);
}


// OUTPUT:
// Plan: Combo Pack, Validity: 37 days
