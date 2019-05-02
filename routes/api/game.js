const router = require("express").Router();
const gameController = require("../../controllers/gameController");

router.route("/newChar")
    .post(gameController.newChar);

module.exports = router;