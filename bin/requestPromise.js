const request = require('superagent');

const requestPromise = (method = 'get', args = []) => {
    return new Promise((resolve, reject) => {
        const resp = (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        };

        request[method](...args).end(resp);
    });
};

module.exports = requestPromise;
