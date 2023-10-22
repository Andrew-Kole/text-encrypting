const fs = require('node:fs');


/**
 * This class is used for reading text files
 * @class
 */
class FileReader{

    filepath;
    /**
     * Creating class instance needs filepath.
     * @constructor
     * @param {string} filepath - filepath to your text-file.
     */
    constructor(filepath){
        this.filepath = filepath;
    }

    /**
     * reads file
     * @method
     */
    readFile(){
        return new Promise((resolve, reject) => {
            fs.readFile(this.filepath, 'utf-8', (err, data) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
}

module.exports = FileReader;