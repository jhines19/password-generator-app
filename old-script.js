function generatePassword() {
    var specialCharacters = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];
    var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var successfulPassword = [];
    var newPassword = ""
    
    //password length input prompt
    var lengthPrompt = prompt("Type in a number between 8 and 128 for the length of your password. \n\n This determines your password length. It must be at least 8 characters and no more than 128 characters.")
    //input data saved
    console.log(lengthPrompt);
    //check for password length input criteria being met
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      alert("Please enter a password with the required length")
      return;
    } 
    //storing the input from lengthPrompt var
    var length = lengthPrompt;
  
    
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
  
    // check boolean value. Has it been put to value true? add corresponding array to successfulPassword array
    if (specialCharConfirm) {
      for (var i of specialCharacters) {
        successfulPassword.push(i);
      }
    }
  
    
    console.log(successfulPassword);
  
    
  
    // //random index of successfulPassword array
    var random = Math.floor(Math.random() * successfulPassword.length)
    // //picking a random character, based on the index chosen by random
    var passwordChar = successfulPassword[random];
    console.log(passwordChar)
  
    // It actually is returning the amount of characters, from successfulPassword, based on the amount I put in from length. Which is great! But it is just returning errors.
    // Why? the errors?
    // Well why is it returning the amount of characters based on length? A: i<length
    // The error is because of indexOf ; that is what is returning. Errors from the array I am trying to 
  
    //The number needed to represent our successfulPassword array in the random selection equation below
    var successfulPasswordLength = successfulPassword.length;
  
    for (var i = 0 ; i < length; i++) {
      newPassword += successfulPassword.charAt(Math.floor(Math.random() * successfulPasswordLength));
      // newPassword +=uppercaseCharacters.indexOf(Math.floor(Math.random() * n));
    }
    console.log(newPassword)
    // An array of values.
    // I need those values. Randomly.
    // I'm getting one value from the array.
  
    //I need to get more than one. how?
  
    //   for (var i = 0, n = specialCharacters.length; i < length; ++i) {
  //     successfulPassword += specialCharacters.indexOf(Math.floor(Math.random() * n));
  // }
    
  
    //the value that comes out of this is not always a number, so you can multiply G by 8
    //We just need to get 8 values our of the array. Not just 1
    //So we get the successfulPassword character
    //We need to get 8 more
    //do newPassword 8 times
  
    
    
    // randomPassword.join('');
  
    //showing one random index
    //what we need is for it to select lengthPrompt amount of indexes from whole..
    //successfulPassword array
    //and give me that
    // console.log(randomPassword);
  
    
    // console.log(generatePassword);
    return newPassword;
  }
  
  //once I'm done with all my criteria prompts, I want it to display what?
  // //photo in phone, generatePassword value will display basically.
  
  
  
  
  //button selector
  var generateBtn = document.querySelector("#generate");
  
  //Rendering of the password into the <text area> using the attribute selector in <text area>
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  generateBtn.addEventListener("click", writePassword);
  
  
  
    // random generation of password from all these choices ^
    // finding random value for each of these ^
    // we need to feed successfulPassword based on true vs false
    
    // generated in successfulPassword
    // include length.value for each ^ 
  
  
  
  
  
  
  
  
  
  
  
  
  
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
  
  