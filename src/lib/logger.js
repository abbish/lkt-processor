//加载类库
{
    var init = require('../init');
    var log4js = require('log4js');
    var underscore = require('underscore');
}

//载入配置
{
    var config = require(init.path.config + '/log.js');
}

log4js.configure(config);

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