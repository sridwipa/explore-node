const mysql = require('mysql2');


const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "ExploreDatabase"
};


var connection;
function handleDisconnect() {
    connection = mysql.createConnection(config);  // Recreate the connection, since the old one cannot be reused.
    connection.connect(function onConnect(err) {   // The server is either down
        if (err) {                                  // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            //setTimeout(handleDisconnect, 10000);    // We introduce a delay before attempting to reconnect,
        }                                           // to avoid a hot loop, and to allow our node script to
    });                                             // process asynchronous requests in the meantime.
    // If you're also serving http, display a 503 error.
    connection.on('error', function onError(err) {
        console.log('db error', err);
        setTimeout(handleDisconnect, 3000);
    });
}

handleDisconnect();

module.exports = { config, connection };