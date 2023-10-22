const crypto = require('node:crypto');


/**
 * Encryptor of a string
 * @class
 */
class Encryptor{
    /**
     * Creating class instance needs original data string.
     * @constructor
     * @param {string} originalData - string you wants to encrypt
     */
    constructor(originalData){
        this.originalData = originalData;
    }

    /**
     * encrypts string
     * @method
     */
    encrypt(){
        const hash = crypto.createHash('md5');
        hash.update(this.originalData);
        return hash.digest('hex');
    }

}

module.exports = Encryptor;