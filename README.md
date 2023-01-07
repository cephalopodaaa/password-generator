# Password Generator

## overview

This is a responsive browser application that uses javascript to generate a password for the user. Here is a screenshot of the deployed application:

![password generator demo](./assets/screenshot.png)

## funtionality

This project generates a random password using criteria collected by the user. The user has the following options.
- Length of password
  - At least 10 characters but no more than 64.
- Character types
  - Lowercase
  - Uppercase
  - Numeric
  - Special characters ($@%&*, etc)

the code also validates the users input to ensure at least one character type has been selected. Providing all of the users preferences are within the correct parameters, the app generates and displays the generated password in the box on the webpage.

The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).
