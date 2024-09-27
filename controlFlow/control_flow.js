let userRole = "admin";
let accessLevel;

// if - else test
if (userRole === "admin") {
    accessLevel = "Full access granted!";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted!";   
} else {
    accessLevel = "No access granted...";
}

console.log(`Acess Level: ${accessLevel}`);

let isLoggedIn = true;
let userMessage;

//  nested if - else test
if (isLoggedIn){
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    } 
} else {
    userMessage = "Please log in to access the system.";
}

console.log(`User Message: ${userMessage}`);

let userType = "subscriber";
let userCategory;

// case test
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log(`User Category: ${userCategory}`);

let isAuthenticated = true;

// ternary operator test
let authenticationStatus = isAuthenticated? "Authenticated" : "Not Authenticated";

console.log(`Authentication Status: ${authenticationStatus}`);

// practice test!
let usrType = "employee";
let dietaryAuth = "";

switch (usrType){
    case "employee":
        dietaryAuth = "Access to dietary services granted.";
        break;
    case "enrolled member":
        dietaryAuth = "Access to dietary services and one-on-one dietician consultations granted";
        break;
    case "subscriber":
        dietaryAuth = "Partial access to dietary services granted.";
        break;
    default:
        dietaryAuth = "You must subscribe or enroll for access to dietary services.";
}

console.log(`Access to dietary services: ${dietaryAuth}`);