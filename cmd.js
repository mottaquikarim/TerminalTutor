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
        .option('-q, --query [quest]', 'Search for phrase [phrase]', '')
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
            console.log('------- DONE -------\n');

            data.reverse().forEach((curr) => {
                console.log(curr);
            });

            console.log('(scroll up for more results, best result directly above this)');
            console.log('^^^ SEARCH RESULTS FOR: ' + program.query + '^^^');
        })
        .catch((err) => err);
}
initScript();
