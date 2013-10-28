//加载类库
{
    var init = require('../init');
    var qx = require('qooxdoo');
    var underscore = require('underscore');
    var abstract = require(init.path.lib + '/abstract');
}

qx.Class.define('LKTMessage', {

    extend: abstract.LKTAbstractMessage
});

module.exports = function(message) {
    return new LKTMessage(message);
};