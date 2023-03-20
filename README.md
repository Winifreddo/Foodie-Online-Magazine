# Foodie Online Magazine

# JavaScript Login/Registration Project for Foodie Online Recipe Finder

## Contents

### Project overview

### Languages

### Existing User Tests

### Project Structure

### Functionality

## Project overview

The aim of this project was to put in place a set of data requirements
that would test a users input and then display an outcome dependent of the result of the tests.

The project provides a login and registration form to capture the data from the user. If the data test fails an error message is communicated back to the user indicating where the error is and how to fix it. If the test returns true the user is either re-directed to a logged in home page or (for login forms) or to the login page (to login after successful registration).

## Languages

- JavaScript
- HTML5
- CSS3

## Existing user sample for testing purposes

username: Misspiggy
password: 1Lovekermit!

## Project structure

**Registration Page:**

- register.html
- register.js
- register.css

**Login Page:**

- login.html
- log_reg.js
- login.css

**Homepage**

- index.html
- script.js
- style.css

**Homepage after login:**

- homepage.html
- homepage.js
- homepage.css

## Functionality

A collection of regular expression variables have been created for testing purposes:

- Regular expression for required username format (between 5-20 characters and contain no spaces)

/^[\w\d\_][^\s]{5,20}$/

- Regular expression for required password format (between 6-20 characters at least 1 capital letter, 1 special character and 1 number)

/^(?=._[A-Z])(?=._[0-9])(?=.\*[\W]).{6,20}$/

- Regular expression for required first name & last name format (between 1-22 characters, accepting of Diacritics (i.e.éó) and dashes for double barrel names(i.e. Emily-Mae) with no numbers allowed)

/([a-zA-Z\-]|[à-ü]|[À-Ü])([^0-9]){1,23}/

- Regular expression for email to ensure email capture is in the correct format

/^([a-zA-Z0-9\.-])+@([a-zA-Z0-9]+).([a-z]{2,10}).([a-z]{2,8})?$/

### Signup

**Code Break down**

Lines 1-4: Declaration of regular expressions for required data format.

Lines 5-9: Array of error messages to be displayed when a data test fails.

Lines 12-15: Creates a modal window with a link to login.html, the link appears once all validation has completed and returned true. Its broken down as follows;

The modal and trigger variable are assigned values using query selector method.
An arrow function is defined (toggleModal) which toggles the "show-login" class on the modal element when called. Its called in the last else if statement if all data has passed the conditions beforehand.

Lines 18-38:
A btn variable is set to capture the submit button on the registration form. An event listener function is then used to 'listen' for when the user 'submits' their data.
Once called a function tests the data and returns either an error message or displays the login link. Its broken down as follows:

the errorMes variable captures an empty paragraph on the html page, its used to insert a message from the array declared on lines 5-9. The signUpIds variable is assigned the elements with the class signup-input, they are stored in a node list. Next testing variables are delcared for each validation check that needs to be completed. For example:

const fNameTest = flNameRegex.test(signUpIds[0].value);

The test variable uses the test method and parses the the first item from the node list stored in the signUpIds. .value is used to capture the data thats been input by the user. The variable will either return true (the test was passed) or false(the data format did not meet the requirements set by the regular expression.)

Five variables are set to test the First name, Last name, Username, Password and email input respectively and return a true or false value.

Finally the conditions are set and if a condition is not met the selected error message is parsed to the empty paragraph element in the html file and displayed to the user. If all conditions are met the toggleModal function is called and executed.

The conditions are as follows: if the fNameTest or lNameTest is false display error message 1, else if the emailTest is false return error message 2, else if createUNameTest is false return error message 3, else if createPassTest is false return error message 4, else dislay the login link.

### Login

**Code Break down**

Lines 2-5: Declaration of regular expressions for required data format.

Lines 8-11: Array of error messages to be displayed when a data test fails.

Lines 16-42: The same logic is used as in the signup form. An event listener is used to 'listen' for when the user 'submits' their data, then a function tests the data captured in the ids variable. The outcomes are different dependant on the test result, if all tests are passed the user is re-directed to the logged in homepage. If tests fail error messages again will display to inform the user of the error and indicate how they can fix it. Lines 28- 32 set conditions of whether the heading element should be displayed, if there is an error message then the heading should be hidden so there is space for the error message to be displayed.
