const CryptoJS = require("crypto-js");
const options = {
  mode: CryptoJS.mode.CFB,
  padding: CryptoJS.pad.NoPadding,
};

export const encrypt = (text, secret) => {
  const encryptedText = CryptoJS.AES.encrypt(text, secret, options).toString();
  return encryptedText;
};

export const decrypt = (text, secret) => {
  if (!secret) {
    return;
  }
  const decryptedText = CryptoJS.AES.decrypt(text, secret, options).toString(
    CryptoJS.enc.Utf8
  );
  return decryptedText;
};

export const generateSecret = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const createMAC = (text, secret) => {
  const hash = CryptoJS.HmacSHA1(text, secret).toString();
  return hash;
};

export const verifyMAC = (hashFromSender, text, secret) => {
  const hash = CryptoJS.HmacSHA1(text, secret).toString();
  return hashFromSender === hash;
};
