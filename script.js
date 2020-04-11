// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";


// Write password to the #password input
function writePassword() {


// Prompts to get password critera

// Password Length Prompt to get proper length
let pwlength = prompt("Enter a number between 8 - 128 for length of password");
let pwsize = parseInt(pwlength);

// if size is to small it ends
if (pwsize < 8) {
  alert("Your Amazing Password must be at least 8 characters");
  return;
}

// if size is to big it ends
if (pwsize > 128) {
  alert("Your Amazing Password must be less than 129 characters");
  return;
}
// if its not a number it ends

if (isNaN(pwsize)) {
  return 'Not a Number!';
}

// confirm boxes to get password criteria

let pwlowercase = confirm("Click OK to use lowercase letters");
let pwuppercase = confirm("Click OK to use using uppercase lets");
let pwnumbers = confirm("Click OK to use using numbers");
let pwsymbols = confirm("Click OK to use using symbols");
  
// if no criteria is selected it ends
if (
  pwlowercase === false &&
  pwuppercase === false &&
  pwnumbers === false &&
  pwsymbols === false
  )     
    {
  alert("Sorry you must select at least one of the character types");
  return;
}
  
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



