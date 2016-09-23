var storage = require('node-persist');
console.log("Starting PassMng");
storage.initSync();
var argv = require('yargs')
          .command('passMng', "Your password manager", function(yargs){
            yargs.options({
              name : {
                demand: true,
                alias : 'n',
                description : 'Your account',
                type : 'string'
              },
              username : {
                demand: true,
                alias : 'u',
                description : 'Your user name',
                type : 'string'
              },
              password : {
                demand: true,
                alias : 'p',
                description : 'Your password',
                type : 'string'
              }
            }).help('help');
          })
          .help('help')
          .argv;

var command = argv._[0];

if(command === "passMng" && argv.name !== "" && argv.username !== "" && argv.password !== ""){
  console.log("Account in " + argv.name + " with user name " + argv.username + " salved!");
}else{
  console.log("Itens falted! Try again");
}

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

// var facebookAccount = getAccount('Facebook');
// console.log(facebookAccount);
