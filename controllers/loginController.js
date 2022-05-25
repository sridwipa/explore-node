const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { config, connection } = require('../db');

const secretKey = "Testing";

exports.login = async (req,res,next) =>{


    try{

        const [row] = await connection.promise().execute(
            "SELECT * FROM `users` WHERE `email`=?",
            [req.body.email]
          );

        if (row.length === 0) {
            return res.status(422).json({
                message: "Invalid email address",
            });
        }

        const passMatch = await bcrypt.compare(req.body.password, row[0].password);
        if(!passMatch){
            return res.status(422).json({
                message: "Incorrect password",
            });
        }

        const theToken = jwt.sign({ id: row[0].id, customerid: row[0].id }, secretKey,{ expiresIn: '1d' });

        return res.json({
            token:theToken
        });

    }
    catch(err){
        next(err);
    }
}