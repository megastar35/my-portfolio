// CHECK INPUT IS EMPTY
const checkEmpty = (inputId, error) => {
    let input = document.getElementById(inputId);
    console.log(input);

    if (input.value.trim() === "") {
        document.getElementById(error).innerHTML = input.name + " can't be empty"
        document.getElementById(error).style.display = "block"
        return false;
    } else {
        document.getElementById(error).innerHTML = " "
        document.getElementById(error).style.display = "none"
        return true;
    }
}

// CHECK EMAIL IS VALID
const checkEmail = (email, error) => {
    let input = document.getElementById(email)
    let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regexEmail.test(input.value)) {
        document.getElementById(error).innerHTML = ""
        document.getElementById(error).style.display = "none"
        return true
    } else {
        document.getElementById(error).innerHTML = input.name + " is not true"
        document.getElementById(error).style.display = "block"
        return false
    }
}
document.getElementById("input_name").onblur = () => {
    checkEmpty("input_name", "name_error");
}
document.getElementById("input_email").onblur = () => {
    
    const bool = checkEmpty("input_email", "email_error");
    if (bool === true) {
        checkEmail("input_email", "email_error")
    }
}
document.getElementById("input_message").onblur = () => {
    checkEmpty("input_message", "message_error");
}