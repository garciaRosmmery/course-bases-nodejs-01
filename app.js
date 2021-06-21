const colors = require('colors');
const {createFile} = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();

createFile(argv.b, argv.l, argv.t)
    .then(nameFile => console.log(colors.green(nameFile), 'creado'))
    .catch(err => console.log(err));

