let age = 25;

function displayAge() {
    console.log("Age inside displayAge():", age);
}

function changeAge() {
    age = 30;
    console.log("Age updated inside changeAge():", age);
}

// Calling the functions
displayAge();
changeAge();
displayAge();
