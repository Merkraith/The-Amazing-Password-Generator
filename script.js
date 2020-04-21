// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", getRandomChar);


let lowerCase = ("abcdefghijklmnopqrstuvwxyz");
let upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
let numbers = ("123456789");
let symbols = ("!#$%&'()*+,-./:;<=>?@[]^_`{|}~]");

finalArr = [lowerCase, upperCase, numbers, symbols];

function getRandomChar() {

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

  let charactersConfirmed = "";


  if (pwLowercase) {
    charactersConfirmed += lowerCase;
  }

  if (pwUppercase) {
    charactersConfirmed += upperCase;
  }
  if (pwNumbers) {
    charactersConfirmed += numbers;
  }
  if (pwSymbols) {
    charactersConfirmed += symbols;
  }

}

// Write password to the #password input
function writePassword() {

  for (let index = 0; index < finalArr.length; index++) {
    let RNG = Math.floor(Math.random() * finalArr.length)

    const insideArr = finalArr[RNG];

    for (let j = 0; j < insideArr.length; j++) {
      let RNG = Math.floor(Math.random() * insideArr.length)

      const insideElement = insideArr[RNG];
      return insideElement;


      // for (let i = 0; i < pwLength; i++) {
      //   let randChar = getRandomChar();
      //   console.log(randChar);
      //   alert("Your Amazing Password is:" + randChar);

      }
    }
  }






