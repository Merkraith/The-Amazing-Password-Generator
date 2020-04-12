// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

  // Password Length Prompt to get proper length
  let pwLength = prompt("Enter a number between 8 - 128 for length of password");
  let pwSize = parseInt(pwLength);

  // if size is to small it ends
  if (pwSize < 8) {
    alert("Your Amazing Password must be at least 8 characters");
    return;
  }

  // if size is to big it ends
  if (pwSize > 128) {
    alert("Your Amazing Password must be less than 129 characters");
    return;
  }
  // if its not a number it ends

  if (isNaN(pwSize)) {
    alert("You must select a Number");
    return;
  }
  // confirm boxes to get password criteria

  let pwLowercase = confirm("Click OK to use lowercase letters");
  let pwUppercase = confirm("Click OK to use using uppercase lets");
  let pwNumbers = confirm("Click OK to use using numbers");
  let pwSymbols = confirm("Click OK to use using symbols");

  // if no criteria is selected it ends
  if (
    pwLowercase === false &&
    pwUppercase === false &&
    pwNumbers === false &&
    pwSymbols === false
  ) {
    alert("Sorry you must select at least one of the character types");
    return;
  }
}
function getRandomChar() {

  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

  let allCharacters = [lowercase, upperCase, numbers, symbols]
  let lowerlettersConfirmed = true;
  let upperlettersConfirmed = true;
  let numbersConfirmed = true;
  let symbolsConfirmed = true;

  if (lowerlettersConfirmed) {
    finalArr.push(arrLowerLetters);
  }

  if (upperlettersConfirmed) {
    finalArr.push(arrUpperLetters);
  }

  if (numbersConfirmed) {
    finalArr.push(arrNumbers);
  }
  if (symbolsConfirmed) {
    finalArr.push(arrSymbols);
  }

  for (let index = 0; index < allCharacters.length; index++) {
    let RNG = Math.floor(Math.random() * allCharacters.length)

    const insideArr = finalArr[RNG];

    for (let j = 0; j < insideArr.length; j++) {
      let RNG = Math.floor(Math.random() * insideArr.length)

      const insideElement = insideArr[RNG];
      return insideElement;

    }
  }
}

for (let i = 0; i < pwLength; i++) {
  let randChar = getRandomChar();
  console.log(randchar);
};

let password = generatePassword() {
  let passwordText = document.querySelector("#password");
  }
  passwordText.value = password;





