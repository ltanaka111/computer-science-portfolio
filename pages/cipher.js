let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function matchAlpha(letter1) {
  return alpha.indexOf(letter1.toUpperCase());
}

function encrypt(key, val) {
  let result = '';

  for (let i = 0; i < val.length; i++) {
    let currentLetter = val[i];

    if (matchAlpha(currentLetter) >= 0) {
      let newIndex = (matchAlpha(currentLetter) + key) % 26; // Ensure the index wraps around
      result += alpha[newIndex];
    } else {
      result += currentLetter; // If it's not an alphabet letter, keep it unchanged
    }
  }
  return result; // Return the encrypted result
}

function decrypt(key, val) {
  let result = '';

  if (!val) {
    console.error("Input is undefined or null");
    return '';
  }

  for (let i = 0; i < val.length; i++) {
    let currentLetter = val[i];

    if (matchAlpha(currentLetter) >= 0) {
      let newIndex = (matchAlpha(currentLetter) - key + 26) % 26; // Ensure the index wraps around correctly
      result += alpha[newIndex];
    } else {
      result += currentLetter; // If it's not an alphabet letter, keep it unchanged
    }
  }
  return result; // Return the decrypted result
}

function processPhrase() {
  let inputPhrase = document.getElementById('inputPhrase').value;
  let inputKey = parseInt(document.getElementById('inputKey').value) || 0; // Use 0 if the key is not a valid number

  // Encrypt the phrase
  let encryptedPhrase = encrypt(inputKey, inputPhrase);
  document.getElementById('encrypted').textContent = encryptedPhrase;

  // Decrypt the encrypted phrase
  let decryptedPhrase = decrypt(inputKey, encryptedPhrase);
  document.getElementById('decrypted').textContent = decryptedPhrase;
}
