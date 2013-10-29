var init = require('../init');
var amqp = require('amqp');
var underscore = require('underscore');

var config = require(init.path.config + '/amqp.js');

var connection = amqp.createConnection(config.conn, config.params);

exports.config = config;
exports.connection = connection;
exports.run = function(processorCallback, errorCallback) {

    connection.on('ready', function () {

        connection.queue(config.queue.name, config.queue.params, function(queue){

            queue.bind(config.queue.routingKey);

            queue.subscribe(config.consumer, function (message, headers, deliveryInfo) {

                processorCallback(message, headers, deliveryInfo, queue);

            });

        });
    });

    connection.on('error', function(error){
        errorCallback(error);
    });
}

