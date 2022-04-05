const { v1: uuidv1, version: uuidVersion } = require('uuid');
const logger = require('../logs');

exports.getPerson = async (req, res, next) => {

    logger.info("test asdfasdf");
    logger.info(process.env.NODE_ENV);
    logger.info(req.params);
    logger.info(JSON.stringify(req.body));
    try {

        haha();
    } catch (err) {
        logger.error(err);
    }

    return res.status(422).json({
        message: uuidv1(),
    });
}