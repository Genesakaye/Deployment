function validation() {
    try {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let validUsername = /^[a-zA-Z0-9._-]{5,30}$/;
        let validPassword = /^[a-zA-Z0-9]{8,20}$/;

        let usernameValid = validUsername.test(username);
        let passwordValid = validPassword.test(password);

        if (!usernameValid && !passwordValid) {
            throw Error("Invalid Email and Password");
        } else if (!usernameValid) {
            throw Error("Invalid Email");
        } else if (!passwordValid) {
            throw Error("Invalid Password");
        }

        alert("Successfully Submitted");
        return true;
    } catch (error) {
        if (error.message.includes("Invalid Email")) {
            console.log("Error: " + error.message);
        } else if (error.message.includes("Invalid Password")) {
            console.log("Error: " + error.message);
        } else {
            console.log("Error: " + error.message);
        }
        console.log(error.message);
        return false;
    }
}
