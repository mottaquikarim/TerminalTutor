const fs = require('fs');
const mkdirp = require('mkdirp');

const mkdirpPromise = function() {
    const args = arguments;

    return new Promise((resolve, reject) => {
        mkdirp(...args, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
}

const readFile = function() {
    const args = arguments;

    return new Promise((resolve, reject) => {
        const onFileRead = (err, data) => {
            if (err) {
                reject(err);
            }

            resolve(data);
        };

        fs.readFile(...args, onFileRead);
    });
}

const writeFile = function() {
    const args = arguments;

    return new Promise((resolve, reject) => {
        const onFileWritten = (err) => {
            if (err) {
                reject(err);
            }
            
            resolve();
        };

        fs.writeFile(...args, onFileWritten);
    });
}

module.exports = {
    readFile,
    writeFile,
    mkdirpPromise,
};
