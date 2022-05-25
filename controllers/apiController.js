const axios = require('axios').default;
const logger = require('../logs');


exports.loginApi = async (req, res) => {

	const conf = {
		method: "POST",
		url: "http://localhost:2000/login",
		data: {
			"email": req.body.email,
			"password": req.body.password
		}
	}

	try {
		const response = await axios(conf);

		logger.info(response);

		return res.status(200).json(response.data);
	} catch (err) {
		logger.error(err.message);

		return res.status(500).json({
			message: err.message
		});
	}

}