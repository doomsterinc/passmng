var argv = require('yargs').argv;
var command = argv._[0];
console.log(argv);

if(command === "hello" && typeof argv.name !== "undefined"){
    console.log("hello " + argv.name + "!");
}else if(command === "hello"){
    console.log('hello world!');
}else{
    console.log("OOPS");
}
