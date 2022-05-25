const jwt = require('jsonwebtoken');

const secretKey = "Testing";

exports.mdw = async (req, res, next) => {

    try {
        if (
            !req.headers.authorization ||
            !req.headers.authorization.startsWith('Bearer') ||
            !req.headers.authorization.split(' ')[1]
        ) {
            return res.status(401).json({
                status: 401,
                message: "failed",
                data: "Please provide the token",
            });
        }

        const theToken = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(theToken, secretKey);
        const customerId = decoded.customerid;

        req.body.customerId = customerId;
        next();

    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            status: 500,
            message: "failed",
            data: err.message
        });
    }
};