const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const cFile = fs.createWriteStream(filePath, {flags: 'a'});
console.log("Enter text, to finish type 'exit' or press ctrl + c");
rl.on('line', (input)=>{
    if(input === 'exit') {
        rl.close();
        cFile.end;
        process.exit;
        console.log("\nThe End");
    } else {
        cFile.write(input + '\n');
    }
});
rl.on('SIGINT', () => {
    console.log("\nTHE END");
    rl.close();
    cFile.end();
    process.exit(0);
})

