function mainFunc() {
    let form = document.forms["main-form"];
    let firstName = form["firstName"].value;
    let lastName = form["lastName"].value;
    let email = form["email"].value;
    let password = form["password"].value;
    let address = form["address"].value;
    let number = form["number"].value;

    if(firstName === "" && lastName === "" && email === "" && password === "" && address === "" && number === "") {
        alert("Please fill the Details first :)");
        return false;
    }

    // firstName validation
    if(firstName.length < 6) {
        alert("First Name should be atleast 6 letters long!");
        return false;
    }
    for(let i = 0; i < firstName.length; i++) {
        let ch = firstName.charCodeAt(i); // it will be a number
        if(!isAlphabet(ch)) {
            alert("Enter only letters in First Name!");
            return false;
        }
    }

    // lastName validation
    if(lastName.length < 5) {
        alert("Last Name should be atleast 5 letters long!");
        console.log(lastName.length);
        return false;
    }
    for(let i = 0; i < lastName.length; i++) {
        let ch = lastName.charCodeAt(i); // it will be a number
        if(!isAlphabet(ch)) {
            alert("Enter only letters in Last Name!");
            return false;
        }
    }

    // email validation
    let i = 0;
    let emailstr = email.toString();
    while(emailstr[i] !== '@' && i < emailstr.length) {
        if(!emailValidator(emailstr, i)) {
            alert("Enter Valid Email ID!");
            return false;
        }
        i++;
    }
    i++;
    let emaildomain = "";
    for(; i < emailstr.length; i++) {
        emaildomain += emailstr[i];
    }
    if(emaildomain !== "gmail.com") {
        alert("Enter the Correct Email Domain!");
        return false;
    }


    // password validation
    if(password.length < 5) {
        alert("Password should be atleast 5 letters long!");
        return false;
    }

    // mobile number validation
    let numstr = number.toString();
    if(numstr.length !== 10) {
        alert("Mobile Number must be 10 digits long!");
        return false;
    }
    if(numstr[0] === '0') {
        alert("Mobile Number should not start from 0!");
        return false;
    }
}

function isAlphabet(ch) {
    // ch will be a number
    if(ch >= 65 && ch <= 90) {
        return true;
    } else if(ch >= 97 && ch <= 122) {
        return true;
    } return false;
}

function emailValidator(str, idx) {
    let num = str.charCodeAt(idx);
    let ch = str[idx];
    if(ch === '.' || ch === '-' || ch === '_') {
        return true;
    } else if(isAlphabet(num) || (num >= 48 && num <= 57)) {
        return true;
    }
    return false;
}