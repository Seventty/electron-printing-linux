/*
    * Connection with the printer here
*/
const { exec, execSync } = require('child_process');

function allPrinters(){
    const allPrintersCommand = "lpstat -p | awk '{print $2}'";
    return execSync(allPrintersCommand).toString().replace('\n', '');
};

function printJob(textToPrint){
    const printCommand = `echo ${textToPrint} | netcat -c 192.168.0.5 9100`;
    return execSync(printCommand).toString().replace('\n', '');
}

module.exports = allPrinters, printJob;