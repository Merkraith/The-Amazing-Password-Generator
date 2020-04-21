let lowerCase = ("abcdefghijklmnopqrstuvwxyz");
let upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
let numbers = ("123456789");
let symbols = ("!#$%&'()*+,-./:;<=>?@[]^_`{|}~]");

function generatePassword() {

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

    let charactersConfirmed = "";
    let pwResult = "";
    // if no criteria is selected it ends

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
    else {
        if (charactersConfirmed < 1) {
            alert("You must choose at least one option of character");
        }
    }
    passLength = charactersConfirmed.length;


    function randomize(length) {
        for (let i = 0; i <= length; i++) {
          pwResult += charactersConfirmed.charAt(
            Math.floor(Math.random() * passLength)
          );
        }
        return pwResult;
      }
    
    document.getElementById("password").innerHTML = randomize(pwSize - 1);
}


