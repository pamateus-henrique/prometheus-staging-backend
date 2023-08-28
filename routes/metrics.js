const express = require('express');

const router = express.Router();

const {customRegistry} = require('../metrics/metrics');
const client = require('prom-client');


// const client = require('prom-client');

// // Create a Registry to register the metrics
// const register = new client.Registry();

// client.collectDefaultMetrics({
//     app: 'node-application-monitoring-app',
//     prefix: 'node_',
//     timeout: 10000,
//     gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
//     register
// });

router.get('/', async (req, res) => {
    const metrics = await customRegistry.metrics();
    const defaultMetrics = await client.register.metrics();
    res.setHeader('Content-Type', customRegistry.contentType);
    res.end(`${metrics}${defaultMetrics}`);
});




module.exports = router;