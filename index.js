function signup(userName) {
    const users = ["Kesar", "Avni", "Som"];

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

console.log(signup("Kesar"));
console.log(signup("Khushi"));
