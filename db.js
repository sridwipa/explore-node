const mysql = require('mysql');


const exploreDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ExploreDatabase"
}).on("error", (err) => {
    console.log("Failed to connect Database : ", err);
});
