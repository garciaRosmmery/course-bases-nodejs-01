const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'list',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla por consola'
            })
            .option('t', {
                alias: 'to',
                type: 'number',
                default: 10,
                describe: 'Indica hasta dónde realiza la tabla'
            })
            .check((argv, options) => {
                if(isNaN(argv.b)) {
                    throw 'La base debes ser un número'
                }
                return true;
            })
            .argv;

module.exports = argv;