const client = require('prom-client');

const customRegistry = new client.Registry();

client.collectDefaultMetrics({register: client.register, timeout: 5000});

const customControllerCounter = new client.Counter({
    name: 'create_product_controller_calls',
    help: 'Total number of times create product controller has been called',
    registers: [customRegistry]
});

module.exports = {
    customControllerCounter,
    customRegistry
}