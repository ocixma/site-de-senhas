function generatePasswords() {
    var length = document.getElementById('password-length').value;
    var uppercase = document.getElementById('uppercase').checked;
    var lowercase = document.getElementById('lowercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var specialCharacters = document.getElementById('special-characters').checked;
    var numberOfPasswords = document.getElementById('number-of-passwords').value;
    var passwords = document.getElementById('passwords');
    
    var characters = '';
    var result = '';
    
    if (uppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    
    if (lowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    
    if (numbers) {
      characters += '0123456789';
    }
    
    if (specialCharacters) {
      characters += '!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    }
    
    for (var i = 0; i < numberOfPasswords; i++) {
      result += generatePassword(length, characters) + '\n';
    }
    
    passwords.value = result;
  }
  
  function generatePassword(length, characters) {
    var password = '';
    
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    
    return password;
  }
  