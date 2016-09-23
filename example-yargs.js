var argv = require('yargs')
    .command('hello', 'Greets the user', function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n'
            }
        });
    })
    .argv;
var command = argv._[0];
console.log(argv);

if(command === "hello" && typeof argv.name !== "undefined" && typeof argv.lastname !== "undefined"){
    console.log("hello " + argv.name + " " + argv.lastname +"!");
}else if(command === "hello" && typeof argv.name !== "undefined"){
    console.log('hello ' + argv.name + '!');
}else{
    console.log("hello world");
}
