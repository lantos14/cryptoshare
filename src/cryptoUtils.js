const CryptoJS = require("crypto-js");
const options = {
  mode: CryptoJS.mode.CFB,
  padding: CryptoJS.pad.NoPadding,
}

export const encrypt = (text, secret) => {
  console.log('encrypt: ', {text, secret});
  const encryptedText = CryptoJS.AES.encrypt(text, secret, options).toString();
  console.log('encryptedText: ', encryptedText);
  return encryptedText;
}

export const decrypt = (text, secret) => {
  if (!secret) {
    return;
  }
  console.log('decrypt: ', {text, secret});
  const decryptedText = CryptoJS.AES.decrypt(text, secret, options).toString(CryptoJS.enc.Utf8);
  console.log('decryptedText: ', decryptedText);
  return decryptedText;
}

export const generateSecret = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}