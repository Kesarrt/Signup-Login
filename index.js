function signup(userName) {
    const users = ["Kesar", "Avni", "Som"];
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

function login(userName, password) {
    const users = ["Kesar", "Avni", "Som"];

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== "123") {
        return "Wrong Password";
    } else {
        return "Login Successful...";
    }
}


console.log(login("Kesar", "123"));
console.log(login("Avni", "wrong"));
console.log(login("Som", "123"));
