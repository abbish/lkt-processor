var init = require('../init');

module.exports = {
    appenders: [
        {
            type: 'console'
        },
        {
            type: 'file',
            absolute: true,
            filename: init.path.logs + '/lkt-processor.log',
            maxLogSize: 20480,
            backups: 10,
            category: 'lkt-processor'
        }
    ],
    replaceConsole: true
}