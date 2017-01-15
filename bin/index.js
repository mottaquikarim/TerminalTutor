const requestPromise = require('./requestPromise');
const fuzzySearcher = require('./fuzzySearcher');
const processData = require('./processData');
const fsp = require('./fsPromise');
const opts = require('../options');

function _getData(url) {
    return fsp.mkdirpPromise(opts.path.split('/').slice(0,-1).join('/'))
        .then(() => requestPromise('get', [url]))
        .then((res) => processData(res.text))
        .then((list) => {
            const obj = {data: list};
            const args = [opts.path, JSON.stringify({data: list})];
            return fsp.writeFile(...args).then(() => list)
        })
        .catch((err) => err);
}

function init(refresh, query = 'file', url = opts.url) {
    var prom;
    if (refresh) {
        prom = _getData(url);
    }
    else {
        prom = fsp.readFile(opts.path)
            .then((dataStr) => JSON.parse(dataStr).data)
            .catch((err) => {
                if (err.errno === -2 && err.code === 'ENOENT') {
                    console.log('Downloading data...');
                    return _getData(url);
                }
                else {
                    console.log(err);
                }

            });
    }


    return prom.then((list) => fuzzySearcher(query, list));
}

module.exports = init;
