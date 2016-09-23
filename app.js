var storage = require('node-persist');
console.log("Starting PassMng");
storage.initSync();
var argv = require('yargs')
          .command('create', "Salve your account details!", function(yargs){
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
          .command('get', "Get your account details!", function(yargs){
            yargs.options({
              nameAccount : {
                demand: true,
                alias : 'n',
                description : 'Your account',
                type : 'string'
              }
            }).help('help');
          })
          .help('help')
          .argv;

var command = argv._[0];

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
var account;
if(command === "create" && argv.name !== "" && argv.username !== "" && argv.password !== ""){
  createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  });
  console.log("Account in " + argv.name + " with user name " + argv.username + " salved!");
}else if (command === "get" && argv.nameAccount !== "") {
  account = getAccount(argv.nameAccount);
  console.log("Your account in: " + account.name + "\n Username: " + account.username + "\nPassword: " + account.password )
}else{
  console.log("Missing arguments! Try again");
}

// createAccount({
//   name: "Facebook",
//   username: "samemail@gmail.com",
//   password: "Password123"
// });

// var facebookAccount = getAccount('Facebook');
// console.log(facebookAccount);
