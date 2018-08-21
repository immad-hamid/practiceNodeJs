const fs = require('fs');

// syncronous methods
// const filesInCurrDir = fs.readdirSync('./');
// console.log(filesInCurrDir);


// asyncronous methods
const filesInCurrDir = fs.readdir('./', 
    (err, files) => {
        if (err) console.log('Error', err)
        else console.log('Result', files)
    }
);
console.log(filesInCurrDir);