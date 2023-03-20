const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailInput = document.getElementById("email");
const errorMessageEmail = document.getElementById("error-message-email");

const phoneRegex = /^.{0,20}$/;
const phoneInput = document.getElementById("phone");
const errorMessagePhone = document.getElementById("error-message-phone");

const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
const urlInput = document.getElementById("url");
const errorMessageUrl = document.getElementById("error-message-url");

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const passwordInput = document.getElementById("password");
const errorMessagePassword = document.getElementById("error-message-password");

const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const nameInput = document.getElementById("name");
const errorMessageName = document.getElementById("error-message-name");


emailInput.addEventListener("input", function() {

    const email = emailInput.value.trim();

    if (emailRegex.test(email)) {

        errorMessageEmail.innerHTML = "";
    } else {

        errorMessageEmail.innerHTML = "Please enter a valid email address";
    }
});

phoneInput.addEventListener("input", function() {
	const phone = phoneInput.value.trim();

		if (phoneRegex.test(phone)) {
				errorMessagePhone.innerHTML = "";
		} else {
				errorMessagePhone.innerHTML = "Please enter a phone number with 20 or fewer characters";
		}
});
urlInput.addEventListener("input", function() {
    
    const url = urlInput.value.trim();

    
    if (urlRegex.test(url)) {
        
        errorMessageUrl.innerHTML = "";
    } else {
        
        errorMessageUrl.innerHTML = "Please enter a valid URL, e.g. http://www.example.com";
    }
});

passwordInput.addEventListener("input", function() {

    const password = passwordInput.value;


    if (passwordRegex.test(password)) {

        errorMessagePassword.innerHTML = "";
    } else {

        errorMessagePassword.innerHTML = "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number";
    }
});

nameInput.addEventListener("input", function() {

    const name = nameInput.value.trim();


    if (nameRegex.test(name)) {

        errorMessageName.innerHTML = "";
    } else {

        errorMessageName.innerHTML = "Please enter a valid name, containing only letters and spaces";
    }
});
