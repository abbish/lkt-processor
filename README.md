#lkt-processor

  A message process framework based on AMQP service component (e.g RabbitMQ)

##Installation

    npm install lkt-processor

##Message

  Message should be include `processor` and `data` properties, `data` will be transfer to processor function

  `processor` is required, `data` is empty allowed

    {"processor": "example", "data": [1, 2, 3, 4]}

##Processor

  processor/example.js

    exports.listeners = {

        'before': function(event) {

        },

        'after': function(event) {

        },

        'succeed': function(event) {

        },

        'failed': function(event) {

        }
    }

    exports.example = function(proc) {

        console.log('Example message processor');
        console.log(proc.getData());

        return true;
    }

  Output:

    [2013-10-29 21:24:15.710] [INFO] console - Example message processor
    [2013-10-29 21:24:15.711] [INFO] console - [ 1, 2, 3, 4, 5 ]