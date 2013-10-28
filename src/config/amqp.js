module.exports = {
    conn: {
        host: 'localhost',
        port: 5672,
        login: 'guest',
        password: 'guest',
        authMechanism: 'AMQPLAIN',
        vhost: '/',
        ssl: {
            enabled : false
        }
    },
    params: {
        defaultExchangeName: 'amq.topic',
        reconnect: true,
        reconnectBackoffStrategy: 'linear',
        reconnectExponentialLimit: 120000,
        reconnectBackoffTime: 1000
    },
    queue: {
        name: 'test',
        routingKey: '#',
        params: {
            durable: true,
            autoDelete: false
        }
    },
    consumer: {
        ack: true,
        prefetchCount: 5
    }
}