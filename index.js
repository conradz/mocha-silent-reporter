var chalk = require('chalk');
var stack = require('stack-trace-parser');
var path = require('path');

function reporter(runner) {
    var failed = [];

    runner.on('fail', function(test, err) {
        var file = path.relative(process.cwd(), test.file);
        var message =
            chalk.red(getName(test)) + chalk.grey(' (' + file + ')') + '\n' +
            chalk.grey(err.stack || err.toString());
        failed.push(message);
    });

    runner.on('end', function() {
        if (failed.length === 0)
            return;

        var count = failed.length > 1
            ? failed.length + ' tests failed'
            : '1 test failed';
        var output =
            failed.join('\n\n') + '\n\n' +
            chalk.red(' ' + count);

        console.log(output);
    });

}

function getName(test) {
    var parent = test.parent;
    var name = '';
    while (parent) {
        if (parent.title)
            name = parent.title + ' ' + name;
        parent = parent.parent;
    }

    return name + test.title;
}

module.exports = reporter;
