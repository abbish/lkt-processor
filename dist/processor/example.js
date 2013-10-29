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