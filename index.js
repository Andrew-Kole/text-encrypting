const FileReader = require('./file-reader');
const Encryptor = require('./encryptor');

const filepath = './textFiles/data.txt';

const reader = new FileReader(filepath);


reader.readFile()
    .then(originalData => {
        const encryptedData = new Encryptor(originalData).encrypt();
        console.log(`Original data from text-file: ${originalData}\nEncrypted data: ${encryptedData}`);
    })
    .catch(error => {
        console.error('Reading file was failed!', error);
    })
