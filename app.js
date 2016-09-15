var storage = require('node-persist');
console.log("Starting PassMng");
storage.initSync();

// account.name Facebook
// account.username User123
// account.password password123

var createAccount = function(account){
  var accounts = storage.getItemSync('accounts');
  if (typeof accounts === "undefined") {
    accounts = [];
  }

  accounts.push(account);
  storage.setItemSync('accounts', accounts);

  return account;
};

var getAccount = function(accountName){
  var accounts = storage.getItemSync('accounts');
  // console.log(accounts);
  var matchedAccount;
  accounts.forEach(function(account){
    if (account.name === accountName) {
      matchedAccount = account;
    }
  });
  return matchedAccount;
};

// createAccount({
//   name: "Facebook",
//   username: "samemail@gmail.com",
//   password: "Password123"
// });

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);
