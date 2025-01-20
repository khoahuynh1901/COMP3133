const fs = require('fs');

// Function to read a file and display its content
const readAndDisplayFile = (fileName) => {
    if (fs.existsSync(fileName)) {
        const data = fs.readFileSync(fileName, 'utf8');
        console.log(`Content of ${fileName}:\n`);
        console.log(data);
    } else {
        console.log(`File ${fileName} does not exist.`);
    }
};

// Display content of canada.txt and usa.txt
readAndDisplayFile('canada.txt');
readAndDisplayFile('usa.txt');
