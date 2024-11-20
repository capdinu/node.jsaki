const fs = require('fs');
const readline = require('readline');
const process = require('process');

// 1. Basic File Write
function writeFile() {
    fs.writeFileSync('hello.txt', 'Hello, Node.js!');
    console.log('File hello.txt created.');
}

// 2. Read File Content
function readFile() {
    fs.readFile('hello.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File Content:', data);
    });
}

// 3. Append to File
function appendFile() {
    fs.appendFile('hello.txt', ' Welcome to Node.js File System module!', (err) => {
        if (err) throw err;
        console.log('Text appended to hello.txt');
    });
}

// 4. Check File Existence
function checkFileExistence() {
    fs.access('hello.txt', fs.constants.F_OK, (err) => {
        console.log(err ? 'File does not exist' : 'File exists');
    });
}

// 5. Rename a File
function renameFile() {
    fs.rename('hello.txt', 'greeting.txt', (err) => {
        if (err) throw err;
        console.log('File renamed to greeting.txt');
    });
}

// 6. Delete a File
function deleteFile() {
    fs.unlink('greeting.txt', (err) => {
        if (err) throw err;
        console.log('File greeting.txt deleted');
    });
}

// 7. Create a New Directory
function createDirectory() {
    fs.mkdir('myFolder', { recursive: true }, (err) => {
        if (err) throw err;
        console.log('Directory myFolder created');
    });
}

// 8. Write a File in a Directory
function writeFileInDirectory() {
    fs.writeFile('myFolder/notes.txt', 'This is a note.', (err) => {
        if (err) throw err;
        console.log('File notes.txt created in myFolder');
    });
}

// 9. List All Files in a Directory
function listFilesInDirectory() {
    fs.readdir('myFolder', (err, files) => {
        if (err) throw err;
        console.log('Files in myFolder:', files);
    });
}

// 10. Copy File Content
function copyFileContent() {
    fs.copyFile('myFolder/notes.txt', 'backup.txt', (err) => {
        if (err) throw err;
        console.log('Content of notes.txt copied to backup.txt');
    });
}

// 11. Read and Parse JSON File
function readJSONFile() {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) throw err;
        const jsonData = JSON.parse(data);
        console.log('JSON Content:', jsonData);
    });
}

// 12. Move a File to Another Directory
function moveFile() {
    fs.rename('backup.txt', 'myFolder/backup.txt', (err) => {
        if (err) throw err;
        console.log('File backup.txt moved to myFolder');
    });
}

// 13. Write JSON Data to a File
function writeJSONFile() {
    const user = { name: 'John', age: 30 };
    fs.writeFile('user.json', JSON.stringify(user), (err) => {
        if (err) throw err;
        console.log('JSON data written to user.json');
    });
}

// 14. Read File Line by Line
function readFileLineByLine() {
    const rl = readline.createInterface({
        input: fs.createReadStream('myFolder/notes.txt'),
        output: process.stdout,
        terminal: false
    });

    rl.on('line', (line) => {
        console.log('Line:', line);
    });
}

// 15. Monitor a File for Changes
function watchFile() {
    fs.watchFile('myFolder/notes.txt', (curr, prev) => {
        console.log('File notes.txt updated');
    });
}

// 16. Error Handling in File Operations
function errorHandling() {
    try {
        const data = fs.readFileSync('nonexistent.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.log('Error:', err.message);
    }
}

// 17. Delete a Directory
function deleteDirectory() {
    fs.rmdir('myFolder', { recursive: true }, (err) => {
        if (err) throw err;
        console.log('Directory myFolder deleted');
    });
}

// 18. Create a File with User Input
function createFileWithInput() {
    const filename = process.argv[2];
    const content = process.argv[3];

    if (!filename || !content) {
        console.log('Usage: node script.js <filename> <content>');
        return;
    }

    fs.writeFile(filename, content, (err) => {
        if (err) throw err;
        console.log(`File ${filename} created with content: ${content}`);
    });
}

// 19. Read File with Encoding
function readFileWithEncoding() {
    fs.readFile('myFolder/notes.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File Content:', data);
    });
}

// 20. Synchronous vs Asynchronous Operations
function readSyncAndAsync() {
    // Synchronous
    try {
        const data = fs.readFileSync('myFolder/notes.txt', 'utf8');
        console.log('Synchronous Read:', data);
    } catch (err) {
        console.log('Error reading file synchronously:', err.message);
    }

    // Asynchronous
    fs.readFile('myFolder/notes.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Asynchronous Read:', data);
    });
}



writeFile();
readFile();
appendFile();
checkFileExistence();
renameFile();
deleteFile();
createDirectory();
writeFileInDirectory();
listFilesInDirectory();
copyFileContent();
readJSONFile();
moveFile();
writeJSONFile();
readFileLineByLine();
watchFile();
errorHandling();
deleteDirectory();
createFileWithInput();
readFileWithEncoding();
readSyncAndAsync();
