const { v1: uuidv1, version: uuidVersion } = require('uuid');
const logger = require('../logs');

exports.getPerson = async (req, res, next) => {

    logger.info("test asdfasdf");
    logger.error("test asdfasdf");
    try {

        haha();
    } catch (err) {
        logger.error(err);
    }

    return res.status(422).json({
        message: uuidv1(),
    });
}