// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];




// Function to prompt user for password options
function getPasswordOptions() {
  choicesCheckpoint = false;
  //while loop to make sure one of the choices is true
  while (choicesCheckpoint === false) {
    var choice1 = confirm("Do you want Lowercase?")
    var choice2 = confirm("Do you want Uppercase?")
    var choice3 = confirm("Do you want Number?")
    var choice4 = confirm("Do you want Special Characters?")
    if (choice1 === true || choice2 === true || choice3 === true || choice4 === true) {
      choicesCheckpoint = true;
    } else {
      alert("you need to pick at least one type of character. Try again");
    }
  }
  // find out how many characters the user wants and makes sure it is between 10 and 64.
    choice5 = 0;
    while (choice5 < 10 || choice5 > 64) {
      var choice5 = prompt("and finally, how many characters? (10 - 64)")
      if (choice5 < 10 || choice5 > 64) {
        alert("please make sure you number between 10 and 64")
  }
}
  return [choice1,choice2,choice3,choice4,Math.floor(choice5)]
}

// Make a working array of all characters chosen by user
function makeWorkingArr(choicesArr) {
  var workingArr = [] //an array containing all of the chosen characters
  //Lowercase
  if (choicesArr[0] === true) {
    for (var i =0; i < lowerCasedCharacters.length; i++) {
      workingArr.push(lowerCasedCharacters[i]);
    }
  }
  //Uppercase
  if (choicesArr[1] === true) {
    for (var i =0; i < upperCasedCharacters.length; i++) {
      workingArr.push(upperCasedCharacters[i]);
    }
  }
  //Numbers
  if (choicesArr[2] === true) {
    for (var i =0; i < numericCharacters.length; i++) {
      workingArr.push(numericCharacters[i]);
    }
  }
  //Special Characters
  if (choicesArr[3] === true) {
    for (var i =0; i < specialCharacters.length; i++) {
      workingArr.push(specialCharacters[i]);
    }
  }
  return workingArr;
}


// Function for getting a random element from an array
function getRandom(workingArr) {
  var randomElement = workingArr[Math.floor(Math.random() * workingArr.length)];
  return randomElement;
}



// Function to generate password with user input
function generatePassword() {
  //called when button pressed
  alert("welcome to the password generator, I'm just gonna ask you a few questions about what you want from this password")
  var choicesArr = getPasswordOptions();
  var workingArr = makeWorkingArr(choicesArr);
  
  //gets the chosen number of random characters from the working array
  var workingPassword = "";
  for (var i = 0; i < choicesArr[4]; i++) {
    var newLetter = getRandom(workingArr);
    workingPassword = workingPassword.concat(newLetter);


  }
  return workingPassword;
}





// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);