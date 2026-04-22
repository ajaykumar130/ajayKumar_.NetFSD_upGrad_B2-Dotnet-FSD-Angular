function getWelcomeMessage(name: string): string {
    return `Welcome ${name} to our application`;
}

function getUserInfo(name: string, age?: number): string {
    return age !== undefined 
        ? `User ${name} is ${age} years old` 
        : `User ${name} age is not provided`;
}

function getSubscriptionStatus(name: string, isSubscribed: boolean = false): string {
    return isSubscribed 
        ? `${name} is subscribed to the service` 
        : `${name} is not subscribed to the service`;
}

function isEligibleForPremium(age: number): boolean {
    return age > 18;
}

const getAccountUpdateMessage = (name: string): string => {
    return `Hello ${name}, your account has been updated successfully`;
};

const NotificationService = {
    appName: "User Notification App",
    sendNotification: (message: string): string => {
        return `${NotificationService.appName}: ${message}`;
    }
};

const welcomeMessage = getWelcomeMessage("Ajay");
const userInfoWithAge = getUserInfo("Ajay", 22);
const userInfoWithoutAge = getUserInfo("Ajay");
const subscriptionStatus = getSubscriptionStatus("Ajay", true);
const defaultSubscriptionStatus = getSubscriptionStatus("Ajay");
const premiumEligibility = isEligibleForPremium(22);
const accountUpdateMessage = getAccountUpdateMessage("Ajay");
const notificationMessage = NotificationService.sendNotification("Welcome to the system");

console.log(welcomeMessage);
console.log(userInfoWithAge);
console.log(userInfoWithoutAge);
console.log(subscriptionStatus);
console.log(defaultSubscriptionStatus);
console.log("Eligible for Premium:", premiumEligibility);
console.log(accountUpdateMessage);
console.log(notificationMessage);