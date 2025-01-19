const fs = require('fs');
const path = require('path');
const filesPath = path.join(__dirname, 'secret-folder');
fs.readdir(filesPath, {withFileTypes: true}, (err, files) => {
    if(err) {
        console.log(err);
        return;
    }
    for(let i = 0; i < files.length; i +=1) {
        let filePath = path.join(filesPath, files[i].name);
        fs.stat(filePath, (err, stat) => {
            if(stat.isFile()){
                console.log(`${path.parse(filePath).name} - ${path.extname(filePath).slice(1)} - ${stat.size}b`)
            }
        })
    }
});
