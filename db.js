const mysql = require('mysql');


const explore_db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ExploreDatabase"
}).on("error", (err) => {
    console.log("Failed to connect Database : ", err);
});


module.exports = explore_db