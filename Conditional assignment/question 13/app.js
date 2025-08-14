// 13. A temperature control system categorizes weather: above 40°C = Extremely Hot, 
// 30–39°C = Hot, 20–29°C = Warm, 10–19°C = Cool, and below 10°C = Cold. If it’s 
// raining, append "and Rainy" to the category. Implement this with an else-if ladder.

let temperature = 32;
let isRaining = true;
let weather = "";

if (temperature > 40) {
    weather = "Extremely Hot";
} else if (temperature >= 30) {
    weather = "Hot";
} else if (temperature >= 20) {
    weather = "Warm";
} else if (temperature >= 10) {
    weather = "Cool";
} else {
    weather = "Cold";
}

if (isRaining) {
    weather += " and Rainy";
}

console.log(`Weather: ${weather}`);

//OUTPUT:
// Weather: Hot and Rainy