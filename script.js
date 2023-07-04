
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";
var passwordChars = "";
var password = "";



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  askLength();
  paramaters();
  return (password);
}

function askLength(){
  userLength = prompt("Please enter the number of characters you want in your password. Value must be between 8-128 characters.");
  userLength = parseInt(userLength);
  characterTotal();
}

function characterTotal(){
  if (userLength <8 || userLength >128){
    askLength();
  }
  else{return};
}

function paramaters(){
  uppercase = confirm("Do you want to use uppercase letters?");
    if (uppercase === true){
      passwordChars += uppercaseChar
    }
  lowercase = confirm("Do you want to use lowercase letters?");
    if (lowercase === true){
      passwordChars += lowercaseChar
    }
  numerals = confirm("Do you want to use numbers?");
    if (numerals === true){
      passwordChars += numericalChar
    }
  spec = confirm("Do you want to use special characters?");
    if (spec === true){
      passwordChars += specialChar
    }
  validateChoices();
}


function validateChoices (){
  if (uppercase === true || lowercase === true || numerals === true || spec === true){
    compilePassword();
  }
  else{
    alert("Please try again choosing at least one option.");
  }
}

function compilePassword(){
  for (var i = 0; i < userLength; i++) {
    password += passwordChars[Math.floor(Math.random() * passwordChars.length)]
  }
}
