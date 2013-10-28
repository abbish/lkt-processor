//加载类库
{
    var init = require('./init');
    var underscore = require('underscore');
    var logger = require(init.path.lib + '/logger').logger('lkt-processor');
    var processor = require(init.path.lib + '/processor');
}

require(init.path.lib + '/subscriber').run(function (message, headers, deliveryInfo, queue) {

    try {

        var json = JSON.parse(message.data.toString());

        try {

            var m = require(init.path.lib + '/message')(json);

            if(!m.hasError())
            {
                processor.run(m);
            }
            else
            {
                logger.error(m.getError());
            }

        }
        catch(e)
        {
            logger.error(e.message);
        }
    }
    catch(e)
    {
        logger.error('Processor message is not a valid JSON object');
    }

    queue.shift();

}, function(error) {

    logger.error(error);

});