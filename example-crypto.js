var crypto = require('crypto-js');

var secretMsg = "i hid the chips under the couch";

var secretKey = "123abc";

var encryptedMessage = crypto.AES.encrypt(secretMsg, secretKey);
console.log(encryptedMessage);
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
console.log(bytes);
