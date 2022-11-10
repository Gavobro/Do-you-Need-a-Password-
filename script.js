// My code here.
// Assigning variables to lowercase, uppercase, and number values.
function generatePassword () {
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9" , "0"];
  var chosenValues = [];

// Creating a prompt and asking how long your personal password will be from 8-128 characters in length.
  lengthOfPassword = prompt ("How long do you want your password to be? Choose between 8-128 characters.") ;
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
      return "ERROR! You did not choose a valid number. Please try again!" ;
  }
    else {
      alert ("Your password will be " + lengthOfPassword + " characters long.") ;
  }

// Creating a checkbox and asking if the user wants lowercase letters in their password.
  hasLowercase = confirm ("Do you want your password to have lowercase letters?") ;
    if (hasLowercase) {
      alert ("Your password will have lowercase letters.") ;
  }
    else {
      alert ("Your password will not have lowercase letters.") ;
  }

// Creating a checkbox and asking if the user wants uppercase letters in their password.
  hasUppercase = confirm ("Do you want your password to have uppercase letters?") ;
   if (hasUppercase) {
      alert ("Your password will have uppercase letters.") ;
  }
    else {
      alert ("Your password will not have uppercase letters.") ;
  }

// Creating a checkbox and asking if the user wants numbers in their password.
  hasNumbers = confirm ("Do you want your password to have numbers?") ;
    if (hasNumbers) {
      alert ("Your password will have numbers.") ;
  }
    else {
      alert ("Your password will not have numbers.") ;
  }

// If the user says no to all checkboxes than no password can be created resulting in an ERROR message displaying in the display box.
    if (hasLowercase === false && hasUppercase === false && hasNumbers === false) {
      return "ERROR! You have not selected a single charcarter type. Please try again!" ;
  }

// Uses the values of either lowercase, uppercase or numbers if the user picks them.
    if (hasLowercase) {
    chosenValues = chosenValues.concat(lowercase) ;
  }
    if (hasUppercase) {
    chosenValues = chosenValues.concat(uppercase) ;
  }
    if (hasNumbers) {
    chosenValues = chosenValues.concat(numbers) ;
  }
  
// Randomizes the values of the password.
  let yourGeneratedPassword = ""
    for (let i = 0; i < lengthOfPassword; i++) {
      let rng = [Math.floor (Math.random () * chosenValues.length) ] ;
      yourGeneratedPassword += chosenValues[rng] ;
  }

  return yourGeneratedPassword;
}

// Starter code here.
var generateBtn = document.querySelector ("#generate") ;

function writePassword () {
  var password = generatePassword () ;
  var passwordText = document.querySelector ("#password") ;
  passwordText.value = password ;
}

generateBtn.addEventListener ("click", writePassword) ;
