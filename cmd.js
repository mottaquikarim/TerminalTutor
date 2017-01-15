#!/usr/bin/env node

const init = require('./bin');
const program = require('commander');

function clearScreen() {
    var lines = process.stdout.getWindowSize()[1];
    for(var i = 0; i < lines; i++) {
        console.log(' ');
    }
}

function initScript() {
    clearScreen();

    program
        .version('0.0.1')
        .option('-r, --refresh', 'Refresh data file')
        .option('-q, --query [quest]', 'Search for phrase [phrase]', 'file')
        .parse(process.argv);

    const noArgsProvided = !process.argv.slice(2).length;
    if (noArgsProvided) {
        program.outputHelp((txt) => txt);
        return;
    }

    if (program.refresh) {
        console.log('Downloading data...');
    }

    init(program.refresh, program.query)
        .then((data) => {
            console.log('SEARCH RESULTS FOR: ' + program.query);
            console.log('\n');
            data.forEach((curr) => {
                console.log(curr);
            });
        })
        .catch((err) => err);
}
initScript();
