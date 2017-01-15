function _getValidatedInfo(currBits) {
    return currBits.reduce((_arr, cBit) => {
        if (cBit.trim() !== '') {
            _arr.push(cBit);
        }

        return _arr;
    }, []);
}

function _getFinalInfo(validatedInfo) {
    const key = validatedInfo[0].replace(/[^A-Za-z0-9\s]+/, '').trim();
    validatedInfo[0] = key;

    const header = validatedInfo.shift();

    const {body, idx} = validatedInfo.reduce((_inf, curr, _i) => {
        if (curr.indexOf('```') !== -1 && !_inf.found) {
            _inf.found = true;
            _inf.idx = _i;
        }

        if (_inf.found) {
            return _inf;
        }

        _inf.body.push(curr);
            
        return _inf;
    }, {found: false, body: [], idx: -1});

    const code = validatedInfo.slice(-1 * (validatedInfo.length - idx));
    code.shift();
    code.pop();

    return {
        finalInfo: [].concat([ 'INFO', '------------------'], header, '', body, ['', 'EXAMPLE', '------------------'], code, ['', '']),
        key,
    }
}

function processData(data) {
    const info = data.split('---');

    info.shift();
    info.pop();

    return info.reduce((_hash, curr) => {
        const currBits = curr.split('\n');

        const validatedInfo = _getValidatedInfo(currBits);

        const {finalInfo, key} = _getFinalInfo(validatedInfo);

        _hash.push({
            keyName:key,
            data: finalInfo.join('\n'),
        });
        /*
        key.split(',').forEach((_key) => {
        });
        */

        return _hash;
    }, []);
}

module.exports = processData;
