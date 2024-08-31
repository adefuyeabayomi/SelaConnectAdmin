interface strengthInformation {
  strength: string;
  tip: string;
}
function checkPasswordStrength(password: string): strengthInformation {
  // Initialize variables
  var strength = 0;
  var tips = "";

  // Check password length
  if (password.length < 8) {
    tips += "Make the password longer. ";
  } else {
    strength += 1;
  }

  // Check for mixed case
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
    strength += 1;
  } else {
    tips += "Use both lowercase and uppercase letters. ";
  }

  // Check for numbers
  if (password.match(/\d/)) {
    strength += 1;
  } else {
    tips += "Include at least one number. ";
  }

  // Check for special characters
  if (password.match(/[^a-zA-Z\d]/)) {
    strength += 1;
  } else {
    tips += "Include at least one special character. ";
  }
  let pStrength: strengthInformation;

  // Return results
  if (strength < 2) {
    //weak
    pStrength = {
      strength: "weak",
      tip: "Your password is easy to guess. " + tips,
    };
    return pStrength;
  } else if (strength === 2) {
    //medium
    pStrength = {
      strength: "medium",
      tip: "Medium Strength: You can make your password stronger. " + tips,
    };
    return pStrength;
  } else if (strength === 3) {
    pStrength = {
      strength: "strong",
      tip: "Password is Strong, but you can make it stronger. " + tips,
    };
    //okay
    return pStrength;
  } else {
    pStrength = {
      strength: "verystrong",
      tip: "Password is extremely difficult. " + tips,
    };
    return pStrength;
  }
}

export default checkPasswordStrength;
