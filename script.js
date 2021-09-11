function generatePassword() {
  var specialCharacters = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];
  var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var successfulPassword = [];

  
  //password length input prompt
  var lengthPrompt = prompt("Type in a number between 8 and 128 for the length of your password. \n\n This determines your password length. It must be at least 8 characters and no more than 128 characters.")
  //input data saved
  console.log(lengthPrompt);
  //check for password length input criteria being met
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Please enter a password with the required length")
    return;
  } 

  
  //lowercase characters confirm or deny prompt
  var lowercaseConfirm = confirm("Add lowercase characters to your password? This helps your password to be stronger.");
  //input data saved
  console.log(lowercaseConfirm);
  
  //check boolean value. Has it been put to value true? add corresponding array to successfulPassword array
  if (lowercaseConfirm) {
    for (var i of lowercaseCharacters) {
      successfulPassword.push(i);
    }
  }


  //uppercase characters confirm or deny prompt
  var uppercaseConfirm = confirm("Add uppercase characters to your password? This helps your password to be stronger.");
  //input data saved
  console.log(uppercaseConfirm); 
  
  //check boolean value. Has it been put to value true? add corresponding array to successfulPassword array
  if (uppercaseConfirm) {
    for (var i of uppercaseCharacters) {
      successfulPassword.push(i);
    }
  }


  //numeric characters confirm or deny prompt
  var numericCharConfirm = confirm("Add numeric characters to your password? This helps your password to be stronger.");
  //input data saved
  console.log(numericCharConfirm); 

  //check boolean value. Has it been put to value true? add corresponding array to successfulPassword array
  if (numericCharConfirm) {
    for (var i of numbers) {
      successfulPassword.push(i);
    }
  }


  //special character characters confirm or deny prompt
  var specialCharConfirm = confirm("Add special characters to your password? This helps your password to be stronger.");
  //input data saved
  console.log(specialCharConfirm); 

  //check boolean value. Has it been put to value true? add corresponding array to successfulPassword array
  if (specialCharConfirm) {
    for (var i of specialCharacters) {
      successfulPassword.push(i);
    }
  }

  
  // console.log(successfulPassword);
  

  // Spitting out 1 char
  // TODO - make it spit out multiple Chars ; lengthPrompt amount to be exact 
  newPasswordChar = successfulPassword[Math.floor(Math.random() * (successfulPassword.length) * lengthPrompt)]
  console.log(newPasswordChar);



  
  
  // randomPassword.join('');

  //showing one random index
  //what we need is for it to select lengthPrompt amount of indexes from whole..
  //successfulPassword array
  //and give me that
  // console.log(randomPassword);

  
  
  return newPasswordChar;
}

//once I'm done with all my criteria prompts, I want it to display what?




//button changes on selector
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);



 // confirms, instead of prompts, for the following and adding them to lengthPrompt^
  // if the user hit true or false then they get sent
  // random generation of password from all these choices ^
  // finding random value for each of these ^
  // we need to feed successfulPassword based on true vs false
  
  // generated in successfulPassword
  // include length.value for each ^ 



// //photo in phone, generatePassword value will display basically.










// -----------------------------my notes--------------------------------


// Epic:
//     -When I click a button I need a process that will take me through the necessary steps/prompts for generating a secure/new/random password
// ✅ : plotted and or working
// ✅✅: working completely




// ✅ Button-Click-to-Prompt:
//     -I am presented with a series of prompts for password criteria
//     -Input/select which criteria to include in the password

// ✅ Criteria-Prompts:
//     ✅-Length: when prompted for the length of the password
//     Choose a length of at least 8 characters and no more than 128 characters
//     ✅-Character Types: when asked for character types to include in the password
//     I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// Input response given:
//     -Individual response given: when I answer each prompt then my input should be validated and at least one character type should be selected
//     -All responses given: a password is generated that matches the selected criteria

// Display the accepted password:
//     -when the password is generated then the password is either displayed in an alert or written to the page

