var storage = require('node-persist');
console.log("Starting PassMng");
storage.initSync();
//Create metods arguments for getting data from the command line
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
              },
              masterPassword : {
                demand: true,
                alias : 'm',
                description : 'Your master password',
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
              },
              masterPassword : {
                demand: true,
                alias : 'm',
                description : 'Your master password',
                type : 'string'
              }
            }).help('help');
          })
          .help('help')
          .argv;

var command = argv._[0];
var account;

//Create account function in node-persist
var createAccount = function(account, masterPassword){
  var accounts = storage.getItemSync('accounts');
  if (typeof accounts === "undefined") {
    accounts = [];
  }

  accounts.push(account);
  storage.setItemSync('accounts', accounts);

  return account;
};

var getAccounts = function (masterPassword) {

};

var saveAccounts = function (accounts, masterPassword) {

};
//Get account function in node-persist
var getAccount = function(accountName, masterPassword){
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

//Checking data before creating and get
if(command === "create" && argv.name !== "" && argv.username !== "" && argv.password !== ""){
  createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  }, argv.masterPassword);
  console.log("Account in " + argv.name + " with user name " + argv.username + " salved!");
}else if (command === "get" && argv.nameAccount !== "") {
  account = getAccount(argv.nameAccount, argv.masterPassword);
  if (typeof account === 'undefined') {
    console.log('Account not found!');
  }else {
    console.log("Your account in: " + account.name + "\nUsername: " + account.username + "\nPassword: " + account.password );
  }
}else{
  console.log("Missing arguments! Try again");
}
