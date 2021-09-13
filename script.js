function generatePassword() {
  var passwordCharacters = " !”#$%&’()*+,-./:;<=>?@[]^_`{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var newPassword = ""

  //password length input prompt
  var lengthPrompt = prompt("Type in a number between 8 and 128 for the length of your password. \n\n This determines your password length. It must be at least 8 characters and no more than 128 characters.")
  //input data saved automatically
  console.log(lengthPrompt);

  //check for password length input criteria being met
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Please enter a password with the required length")
    return;
  } 

  //storing the input from lengthPrompt for randomizing logic
  var length = lengthPrompt;
  

  //confirm prompts:
  var lowercaseConfirm = confirm("Add lowercase characters to your password? This helps your password to be stronger.");
  var uppercaseConfirm = confirm("Add uppercase characters to your password? This helps your password to be stronger.");
  var numericCharConfirm = confirm("Add numeric characters to your password? This helps your password to be stronger.");
  var specialCharConfirm = confirm("Add special characters to your password? This helps your password to be stronger.");

  
  //randomizing logic for my characters:


  //representing string as a number for math.random
  var passwordCharactersLength = passwordCharacters.length;

  //Increment based off length var (lengthPrompt), add random values into a new string variable
  for (var i = 0 ; i < length; i++) {
    newPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharactersLength));
  }
  
    return newPassword;
}


//Textfield and Button clicking logic:

//Passing password into the <text area> using the attribute selector in <text area>
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Making button clickable and connected to generatePassword logic and text field, via writePassword function and #password attribute in the writePassword function
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


// -----------------------------My Notes--------------------------------
//It is better to use a string with the password characters you want requried in a string, since those values are strings
//No need to put each password character type you want as a part of the password into their own arrays or even in one big array
//That just made it more difficult because you are having to go from strings to arrays, and there are different methods for each data type
