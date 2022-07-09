const router = require("express").Router();
const { getAll } = require('./controllers/testingController')
//const { mdw } = require('./middleware')
//const { getPerson, updateHobbies, viewPerson } = require('./controllers/personController');
//const { login } = require('./controllers/loginController');
//const { loginApi } = require('./controllers/apiController');
//const { body, validationResult } = require('express-validator');
//router.use(mdw);

//router.post("/login", login);
//router.post("/loginApi", loginApi);
//router.get("/person", mdw, getPerson);
//router.post("/hobbies", mdw, updateHobbies);
//router.get("/", getPerson);
//router.post("/view", viewPerson);

router.get("/", getAll);
module.exports = router;