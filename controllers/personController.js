const { v1: uuidv1, version: uuidVersion } = require('uuid');
const logger = require('../logs');
const { config, connection } = require('../db')
const mysql = require('mysql2');
const moment = require('moment');
const { body, validationResult } = require('express-validator');

exports.viewPerson = async (req, res) => {


    try {

        let limit = req.body.limit;
        let page = req.body.page ?? 1;

        body('limit', 'Please check the limit data type format').isNumeric();
        body('page', 'Please check the page data type format').isNumeric();


        page -= 1;
        page *= 1;

        const validation = validationResult(req);

        if (validation.errors.length > 0) {
            return res.status(500).json({
                status: 500,
                message: "failed",
                data: validation.errors[0].msg
            });
        }

        const conn = mysql.createConnection(config).on("error", (err) => {
            logger.error("Failed to connect Database : ", err.message);
        });
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
        return res.status(500).json({
            message: err.message
        });
    }


}


exports.getPerson = async (req, res) => {

    console.log(moment("2022-05-31 19:29:44", 'YYYY-MM-DD HH:mm:ss', true).isValid());

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
            data: []
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

            logger.info("TEST 2 " + JSON.stringify(sd) + " " + JSON.stringify(data));
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