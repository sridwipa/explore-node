const { v1: uuidv1, version: uuidVersion } = require('uuid');
const logger = require('../logs');
const { config, connection } = require('../db')
const mysql = require('mysql2');

exports.getPerson = async (req, res) => {

    try {

        const conn = mysql.createConnection(config).on("error", (err) => {
            logger.error("Failed to connect Database : ", err.message);
        });

        //conn.connect();
        conn.query("SELECT * FROM person", function (sd, data) {
            //conn.end();
            logger.info("TEST 4 " + JSON.stringify(data));

            //conn.connect();
            conn.query("SELECT * FROM person", function (sd, data) {
                conn.end();
                logger.info("TEST 4 " + JSON.stringify(data));
                return res.status(200).json({
                    message: data
                });
            });
        });
    } catch (err) {
        logger.error(err);
    }


}


exports.updateHobbies = async (req, res) => {

    try {

        const conn = mysql.createConnection(config).on("error", (err) => {
            logger.error("Failed to connect Database : ", err.message);
        });

        const id = req.body.id;
        const hobbies = req.body.hobbies;

        await conn.promise().execute("update person set hobbies = ?, lastupdate = now() where id = ?", [hobbies, id]);

        return res.status(200).json({
            message: "success",
            data:[]
        });
    } catch (err) {
        logger.error(err);

        return res.status(500).json({
            message: "failed",
            data: err.message
        });
    }


}



exports.getPerson2 = async (req, res, next) => {

    logger.info(process.env.PORT);
    try {

        logger.info("TEST 1");
        connection.query("SELECT * FROM person limit 1", function (sd, data) {

            logger.info("TEST 2 " + JSON.stringify(sd) + " "+ JSON.stringify(data));
        });

        logger.info("TEST 3");

        connection.query("SELECT * FROM person limit 1", function (sd, data) {

            logger.info("TEST 4 " + JSON.stringify(sd) + " " + JSON.stringify(data));

            //connection.destroy();
            return res.status(200).json({
                message: data
            });
        });

    } catch (err) {
        logger.error(err);
    }


}