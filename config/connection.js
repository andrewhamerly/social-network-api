const { connect, connection } = require('mongoose');

const connectionString = 'mongodb+srv://mike-class:mikeClassPasswordNumberTw0@dronefigs.5jnlz.mongodb.net/socialNetworkDB';

connect(connectionString);

module.exports = connection;