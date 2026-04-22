const userName: string = "Ajay";
const email: string = "ajay@gmail.com";
const isSubscribed: boolean = true;

let age: number = 22;

let city = "Ongole";
let loginCount = 5;

age = age + 1;

const profileMessage: string = `Hello ${userName}, you are ${age} years old and your email is ${email}`;

const isEligibleForPremium: boolean = age > 18 && isSubscribed;

const isAdult: boolean = age >= 18;
const hasHighLoginCount: boolean = loginCount > 3;

console.log("--- USER PROFILE DETAILS ---");

console.log("User Name:", userName);
console.log("Age:", age);
console.log("Email:", email);
console.log("Subscribed:", isSubscribed);

console.log("\n--- TYPE INFERENCE VALUES ---");
console.log("City:", city);
console.log("Login Count:", loginCount);

console.log("\n--- PROFILE MESSAGE ---");
console.log(profileMessage);

console.log("\n--- CONDITIONS ---");
console.log("Is Adult:", isAdult);
console.log("Has High Login Count:", hasHighLoginCount);
console.log("Eligible for Premium:", isEligibleForPremium);