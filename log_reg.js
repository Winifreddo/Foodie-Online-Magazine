// Regular Expressions for validation
const flNameRegex = /([a-zA-Z]|[à-ü]|[À-Ü])([^0-9]){1,20}/;
const uNameRegEx = /^[\w\.-]{6,15}$/;
const emailRegEx = /^([\w\.-]+)@([\w]+)\.([a-z]{2,10})\.([a-z]){2,6}?$/;
const passRegEx = /^(?=.*[\w])(?=.*[\W])(?=.*\d).{8,20}$/;

// Error messages
const errorArr = [
  "Sorry, we didn't recognise that user. Please try again",
  "Oops, we didn't recognise that password. Please try again",
  "There was an error in the name field, please only enter letters",
];

// event listener function

const btn = document.getElementById("login-submit");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  // returns the user input elements as node list
  const ids = document.querySelectorAll(".login-input");
  // selection of error message id to display error message
  //  in case of forms not passing validation
  const errorMes = document.getElementById("error-message");
  // tests users input against regex for required format
  const uNameTest = uNameRegEx.test(ids[0].value);
  const passTest = passRegEx.test(ids[1].value);

  // condition for heading to display if error message not displayed
  //  and hide if error message is displayed
  const heading = document.getElementById("login-heading");
  if (heading.style.display === "none") {
    heading.style.display = "block";
  } else {
    heading.style.display = "none";
  }
  // conditions for successful submission. depending on the mistake an error
  // message from display is selected.

  if (!uNameTest) {
    errorMes.innerHTML = errorArr[0];
  } else if (!passTest) {
    errorMes.innerHTML = errorArr[1];
  } else if (uNameTest && passTest) {
    window.location.href = "homepage.html";
  }
});
