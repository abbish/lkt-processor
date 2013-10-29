var init = require('../init');
var qx = require('qooxdoo');
var underscore = require('underscore');
var abstract = require(init.path.lib + '/abstract');

qx.Class.define('LKTProcessor', {

    extend: abstract.LKTAbstractProcessor
});

exports.run = function(LKTMessage) {

    if(LKTMessage.hasError())
    {
        throw new Error(LKTMessage.getError());
    }

    var pname = LKTMessage.getProcessor();
    var processor = require('lkt-processor-' + pname);

    var p = new LKTProcessor(LKTMessage.getData());

    if(p.hasError())
    {
        throw new Error(LKTMessage.getError());
    }

    if(!underscore.isEmpty(processor.listeners))
    {
        underscore.forEach(processor.listeners, function(func, key) {

            p.addListener(key, func)
        });
    }

    p.run(eval("processor." + pname));
};