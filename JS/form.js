const form = document.querySelector(".form-container");
const email = document.querySelector(".email-input");
const message = document.querySelector(".message-input");
const formField = document.querySelector(".contact-form");



function validateEmail(email) {

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // The Regex is copied from: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const patternMatch = emailRegex.test(String(email).toLowerCase());

    return patternMatch;
}

const displayError = (input, error) => {

    input.nextElementSibling.classList.add("form-error");
    input.nextElementSibling.innerText = error;
}

const removeError = (input) => {

    input.nextElementSibling.innerText = "";
    input.nextElementSibling.classList.remove("form-error");

}

const validateInputs = () => {

    const emailValue = email.value.trim()
    const messageValue = message.value.trim()
    const success = document.querySelector("#form-message");



        if (!validateEmail(emailValue)) {

            displayError(email, "* Please provide your email so we can get back to you");
        }
        else {
            removeError(email)
        }

        if (messageValue.length <10) {
            displayError(subject, "* Please tell us what we can help you with (minimum 10 characters)");
        }
        else {
            removeError(subject);
            success.innerHTML = "";
        }

        // Success validation

        if (validateEmail(emailValue) && messageValue.length >= 10) {
            success.innerHTML = `<div class="success">Thank you! We have received your message and will get back to you as soon as possible (Usually within 24 hours)
            
            <a href="list-of-videos.html"><h3 class="cta-button">Browse Movies</h3></a></div>`;
            success.style.color="lightgreen";
            formField.style["display"] = "none";
        }
        else {
            success.innerHTML = "";
        }

}


form.addEventListener("submit", (event) => {

    event.preventDefault();

    validateInputs();

});
