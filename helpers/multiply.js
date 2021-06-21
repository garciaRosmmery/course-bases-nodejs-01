const fs = require('fs');
const colors =  require('colors');

const createFile = async (base = 5, list = false, to = 10) => {

    try {

        let output = ''
        let impConsole = ''

        for(let i = 1; i <= to; i++) {

            impConsole  += `${base} ${'x'.blue} ${i} ${'='.blue} ${base * i}\n`;

            output += `${base} x ${i} = ${base * i}\n`;
        }

        if(list)
        {
            console.log('==========================='.blue);
            console.log('       Tabla del: '.blue,  colors.red(base));
            console.log('==========================='.blue);

            console.log(impConsole );

        }

        fs.writeFileSync(`./outputs/tabla-${base}.txt`, output);

        return (`tabla-${base}.txt`);

    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    createFile
}