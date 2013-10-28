//加载类库
{
    var init = require('../init');
    var amqp = require('amqp');
    var underscore = require('underscore');
}

//载入配置
{
    var config = require(init.path.config + '/amqp.js');
}

//初始化连接
{
    var connection = amqp.createConnection(config.conn, config.params);
}

exports.config = config;
exports.connection = connection;
exports.run = function(processorCallback, errorCallback) {

    //监听消息
    {
        connection.on('ready', function () {

            connection.queue(config.queue.name, config.queue.params, function(queue){

                queue.bind(config.queue.routingKey);

                queue.subscribe(config.consumer, function (message, headers, deliveryInfo) {

                    processorCallback(message, headers, deliveryInfo, queue);

                });

            });
        });
    }

    //监听错误
    {
        connection.on('error', function(error){
            errorCallback(error);
        });
    }
}

