var passwordLength = 10;
var finalArray = [];
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
  // Validates if true and injects the result into final array
  function getPasswordOptions() {
    finalArray = [];
    passwordLength = parseInt(prompt('Please give a number between 10 and 64 for the characters to be in your password'));
    if (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
      alert('Please select a number between 10 and 64, please try again!');
      return false;
    }
    if (confirm('Select ok to include small letters')) {
      finalArray = finalArray.concat(lowerCasedCharacters);
    }
    if (confirm('Select ok to include capital letters')) {
      finalArray = finalArray.concat(upperCasedCharacters);
    }
    if (confirm('Select ok to include special characters')) {
      finalArray = finalArray.concat(specialCharacters);
    }
    if (confirm('Select ok to include numbers')) {
      finalArray = finalArray.concat(numericCharacters);
  
    } 
    return true;

  }
  
  // Function for getting a random element from an array
 
  
  
  
  
  // Function to generate password with user input
  function generatePassword() {
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomCharacter = Math.floor(Math.random() * finalArray.length);
      password = password + finalArray[randomCharacter];
    } return password;
  
  
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