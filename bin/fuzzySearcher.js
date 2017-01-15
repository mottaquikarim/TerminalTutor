const fuzzy = require('fuzzy');

function fuzzySearcher(query = 'file', list = []) {
    const options = {
        extract: (el) => {
            return el.keyName;
        }
    };

    const results = fuzzy.filter(query, list, options);
    return results.map((el) => el.original.data);
}

module.exports = fuzzySearcher;
