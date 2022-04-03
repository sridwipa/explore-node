const router = require("express").Router();
const { getPerson } = require('./controllers/personController');

router.get("/index", getPerson);
router.get("/", async (req, res, next) => {


    return res.status(200).json({
        message: "test"
    });
});

module.exports = router;