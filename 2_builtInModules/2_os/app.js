const os = require('os');

let totalMem = os.totalmem(); 
let freeMem = os.freemem();

console.log(`Total Mem: ${totalMem}\nFree Mem: ${freeMem}`);