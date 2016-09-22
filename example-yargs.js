var argv = require('yargs').argv;

console.log(argv);

if(argv._[0] === "hello"){
    console.log("hello world");
}else {
    console.log('OOPS');
}
