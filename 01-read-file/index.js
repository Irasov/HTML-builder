const path = require('path');
const fs = require('fs');
const  filePath = path.join(__dirname, 'text.txt');
const stream = new fs.ReadStream(filePath, {encoding: 'UTF-8'});
stream.on("readable", () => {
    data = stream.read();
    if(data !== null) console.log(data);
});

