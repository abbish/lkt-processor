var init = require('../init');
var log4js = require('log4js');
var underscore = require('underscore');
var mkdirp = require('mkdirp');
var fs = require('fs');

if(!fs.existsSync(init.path.logs))
{
    mkdirp(init.path.logs);
}

log4js.configure(require(init.path.config + '/log.js'));

exports.logger = function(name, level, config, configOpts) {

    var logger = log4js.getLogger(name);

    if(!underscore.isEmpty(config))
    {
        logger.configure(config, configOpts);
    }

    if(!underscore.isEmpty(level))
    {
        logger.setLevel(level.toUpperCase());
    }

    return logger;

}