const router = require("express").Router();
const { mdw } = require('./middleware')
const { getPerson, updateHobbies } = require('./controllers/personController');
const { login } = require('./controllers/loginController');
const { loginApi } = require('./controllers/apiController');

//router.use(mdw);

router.post("/login", login);
router.post("/loginApi", loginApi);
router.get("/person", mdw, getPerson);
router.post("/hobbies", mdw, updateHobbies);
router.get("/", async (req, res, next) => {
    return res.status(200).json({
        message: "test"
    });
});

module.exports = router;