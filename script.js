// Declaration of variables
var form = document.forms["contact-form"];
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const query = document.getElementsByName("query");
const Message = document.getElementById("message");
const consent = document.getElementById("consent");
const approved = document.getElementById("approved");
const button = document.querySelector('button')

const error = document.querySelectorAll('.error');
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const queryError = document.getElementById("queryError");
const MessageError = document.getElementById("messageError");
const consentError = document.getElementById("consentError");

// Element and error array for value input elements
const elementArray = [firstName, lastName, email, Message];
const errorArray = [firstNameError, lastNameError, emailError, MessageError];

// checks for empty values and returns an error
function isItEmpty() {
    
    for (let i = 0; i < elementArray.length; i++) {
        const element = elementArray[i];
        const error = errorArray[i];
        if (i < elementArray.length) {
            if (element.value.trim() === "" && i >= 0) {
                element.style.transition = "1s";
                error.style.visibility = "visible";
                element.style.borderColor = "red";
                element.style.outline = "none";
            }
        }
    }
    
    if (query[0].checked === false && query[1].checked === false) {
        queryError.style.visibility = "visible";
    }
    
    if (consent.checked === false) {
        consentError.style.visibility = "visible";
    }
}


// eventlistener function for value inputs
function checkElement(event) {
  const errorElement = event.target.parentElement.lastElementChild;
  if (event.target.value.trim() === "") {
    errorElement.style.visibility = "visible";
    event.target.style.borderColor = "red";
    event.target.style.transition = "1s";
    event.target.style.outline = "none";
  } else {
    errorElement.style.visibility = "hidden";
    event.target.style.borderColor = "#0c7d69";
    event.target.style.outline = "none";
  }
}

// runs only after the form submit button is clicked
function checkError(event) {
  event.preventDefault();
  isItEmpty()
    for (let i = 0; i < error.length; i++) {
      const errorElement = error[i];
    if (errorElement.style.visibility !== 'hidden'){  
      approved.style.display = 'none';

      return;
    }
    else{
      approved.style.display = 'block';
    }
  }
  
  if (approved.style.display === 'block') {
    const formData = new FormData(event.target);
    const enteredFirstName = formData.get('firstname').trim();
    const enteredLastName = formData.get('lastname').trim();
    const enteredEmail = formData.get('Email').trim();
    const selectedQuery = formData.get('query').trim();
    const writtenMessage = formData.get('Message').trim();

    form.reset()
  }

}


// eventlistener function for checked inputs
function inputChecked(event) {
  if (event.target.checked === true) {
    if (event.target === query[0] || event.target === query[1]) {
        queryError.style.visibility = "hidden";
    }
    if (event.target === consent) {
      consentError.style.visibility = "hidden";
    }
}
    if(event.target === consent){
        if(!event.target.checked){
            consentError.style.visibility = "visible";
        }
}
}

// filling a new form
function formReset(event) {
  if (approved.style.display == 'block'){
    approved.style.display = 'none';
  }
  
}

  // event listeners for different elements
form.addEventListener('submit',checkError);
form.addEventListener('click', formReset);
query[0].addEventListener("click", inputChecked);
query[1].addEventListener("click", inputChecked);
consent.addEventListener("click", inputChecked);
firstName.addEventListener("blur", checkElement);
lastName.addEventListener("blur", checkElement);
email.addEventListener("blur", checkElement);
Message.addEventListener("blur", checkElement);

firstName.addEventListener("input", checkElement);
lastName.addEventListener("input", checkElement);
email.addEventListener("input", checkElement);
Message.addEventListener("input", checkElement);

