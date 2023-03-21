const form = document.querySelector(".contact-form");
const email = document.querySelector(".email-input");
const message = document.querySelector(".message-input");



function validateEmail(email) {

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // The Regex is copied from: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const patternMatch = emailRegex.test(String(email).toLowerCase());

    return patternMatch;
}

const displayError = (input, error) => {

    input.classList.add("form-error");
    input.innerText = error;
}

const removeError = (input) => {

    input.innerText = "";
    input.classList.remove("form-error");

}


const validateInputs = () => {

    const emailValue = email.value.trim()
    const messageValue = message.value.trim()
    const success = document.querySelector("#form-h1");



        if (!validateEmail(emailValue)) {

            displayError(email, "Your Email address is incorrect");
        }
        else {
            removeError(email)
        }

        if (messageValue.length < 10) {
            displayError(subject, "Please give us more information(Minimum 10 characters)");
        }
        else {
            removeError(subject);
            success.innerHTML = "";
        }

        // Success validation

        if (validateEmail(emailValue) && messageValue.length >= 10) {
            success.innerHTML = "Thank you! We have received your message and will get back to you as soon as possible.(Usually within 24 hours)";
        }
        else {
            success.innerHTML = "";
        }

}


form.addEventListener("submit", (event) => {

    event.preventDefault();

    validateInputs();

});
