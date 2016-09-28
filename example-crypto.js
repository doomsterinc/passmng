var crypto = require('crypto-js');

var secretMsg = {
  name: 'Maicon',
  secretName: 'Doom',
  message:"i hid the chips under the couch"
};
var str = JSON.stringify(secretMsg);
console.log(typeof str);
var secretKey = "123abc";

var encryptedMessage = crypto.AES.encrypt(str, secretKey);
console.log("Message :" + encryptedMessage);
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);
var obj = JSON.parse(decryptedMessage);
console.log(obj.secretName);
