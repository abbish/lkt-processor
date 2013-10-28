//加载类库
{
    var qx = require('qooxdoo');
    var underscore = require('underscore');
}

qx.Class.define("LKTAbstract", {

    type : "abstract",
    extend: qx.core.Object,

    members: {
        _error: null,

        _setError: function(error){
            this._error = error;
        },

        getError: function(){
            return this._error;
        },

        hasError: function(){
            return !underscore.isEmpty(this._error);
        }
    }
});

qx.Class.define("LKTAbstractProcessor", {

    type : "abstract",
    extend: LKTAbstract,

    construct : function(data) {
        this._data = data;
    },

    members: {
        _data: null,

        getData: function () {
            return this._data;
        },

        run: function(runCallback){

            if(this.hasListener('before'))
            {
                this.fireEvent('before', null, this);
            }

            var rs = runCallback(this);

            if(!underscore.isBoolean(rs))
            {
                throw new Error('Processor should be return a type of boolean value');
            }

            if(this.hasListener('after'))
            {
                this.fireEvent('after', null, this);
            }

            if(rs && this.hasListener('succeed'))
            {
                this.fireEvent('succeed', null, this);
            }

            if(!rs && this.hasListener('failed'))
            {
                this.fireEvent('failed', null, this);
            }

            return rs;
        }
    },

    events: {
        before: 'qx.event.type.Event',
        after: 'qx.event.type.Event',
        failed: 'qx.event.type.Event',
        succeed: 'qx.event.type.Event'
    }
});

qx.Class.define("LKTAbstractMessage", {

    type : "abstract",
    extend: LKTAbstract,

    construct : function(message) {

        this._message = message;

        this._parse();
    },

    members: {
        _message: null,
        _processor: null,
        _data: null,

        _parse: function() {

            if(!underscore.isObject(this._message))
            {
                this._setError('Processor message should be a valid JSON object');
            }
            else
            {
                if(underscore.isEmpty(this._message.processor))
                {
                    this._setError('Processor message field `processor` cannot be blank');
                }
                else
                {
                    this._processor = this._message.processor;

                    if(!underscore.isEmpty(this._message.data))
                    {
                        this._data = this._message.data;
                    }
                }
            }
        },

        getMessage: function() {
            return this._message;
        },

        getProcessor: function () {
            return this._processor;
        },

        getData: function () {
            return this._data;
        }
    }
});

exports.LKTAbstract = LKTAbstract;
exports.LKTAbstractProcessor = LKTAbstractProcessor;
exports.LKTAbstractMessage = LKTAbstractMessage;