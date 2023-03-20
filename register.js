const flNameRegex = /([a-zA-Z\-]|[à-ü]|[À-Ü])([^0-9]){1,23}/;
const uNameRegEx = /^[\w\.-]{6,15}$/;
const emailRegEx = /^([\w\.-]+)@([\w]+)\.([a-z]{2,10})\.([a-z]){2,6}?$/;
const passRegEx = /^(?=.*[\w])(?=.*[\W])(?=.*\d).{8,20}$/;
const errorArr = [
  "There was an error in the name field, please only enter letters",
  "Uh-oh, your email address wasn't accepted, please try again",
  "Your username must be at least 6 characters long.",
  "Oops, your password was not accepted. Please use at least one capital letter, number and special character",
];

const heading = document.querySelector("signup-heading");
// const registrationForm = document.getElementById("registration");

const modal = document.querySelector(".buttontologin");
const trigger = document.querySelector(".submit");
let toggleModal = (e) => {
  modal.classList.toggle("show-login");
};

const btn = document.getElementById("signup-submit");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const errorMes = document.getElementById("error-message");
  const signUpIds = document.querySelectorAll(".signup-input");

  const fNameTest = flNameRegex.test(signUpIds[0].value);
  const lNameTest = flNameRegex.test(signUpIds[1].value);
  const createUNameTest = uNameRegEx.test(signUpIds[3].value);
  const emailTest = emailRegEx.test(signUpIds[2].value);
  const createPassTest = passRegEx.test(signUpIds[4].value);
  if (!fNameTest || !lNameTest) {
    errorMes.innerHTML = errorArr[0];
  } else if (!emailTest) {
    errorMes.innerHTML = errorArr[1];
  } else if (!createUNameTest) {
    errorMes.innerHTML = errorArr[2];
  } else if (!createPassTest) {
    errorMes.innerHTML = errorArr[3];
  } else if (e.target === trigger) {
    toggleModal();
  }
});
