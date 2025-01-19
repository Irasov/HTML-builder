const fs = require('fs').promises;
const { error } = require('console');
const path = require('path');
copyPath = path.join(__dirname, 'files');
destPath = path.join(__dirname, 'files-copy');

async function clearDir(dir){
    try{
        const files = await fs.readdir(dir);
        for(let i = 0; i < files.length; i += 1) {
            const fpath = path.join(dir, files[i]);
            await fs.unlink(fpath);
        }
    } catch (err) {
        console.error(err);
    }
}

async function copyFiles (copy, dest) {
    try{
        try {
            await fs.mkdir(dest, {recursive: true});
        } catch(err) {
            console.error('error directory:', err);
            return;
        }
        clearDir(dest);
        const files = await fs.readdir(copy);
        for(let i = 0; i < files.length; i +=1) {
            const copyFile = path.join(copy, files[i]);
            const destFile = path.join(dest, files[i]);
            await fs.copyFile(copyFile, destFile);
        }
    }catch(err) {
        console.error("error copy files:", err);
    }
};

copyFiles(copyPath, destPath);