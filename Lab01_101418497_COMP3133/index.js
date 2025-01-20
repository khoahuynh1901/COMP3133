const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

// Delete existing files if they exist
if (fs.existsSync(canadaFile)) {
    fs.unlinkSync(canadaFile);
    console.log(`${canadaFile} deleted.`);
}

if (fs.existsSync(usaFile)) {
    fs.unlinkSync(usaFile);
    console.log(`${usaFile} deleted.`);
}

// Read and process the CSV file
fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        const { country, year, population } = row;
        const line = `${country},${year},${population}\n`;

        if (country.toLowerCase() === 'canada') {
            fs.appendFileSync(canadaFile, line);
        } else if (country.toLowerCase() === 'united states') {
            fs.appendFileSync(usaFile, line);
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed.');
    });
