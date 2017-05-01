const helpers = require('./helpers');
const metadata = {
    title: 'Quantum Fillter',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    HMR: helpers.hasProcessFlag('hot'),
    isDevServer: helpers.isWebpackDevServer(),
    ENV: process.env.NODE_ENV
}
exports.metadata = metadata;
