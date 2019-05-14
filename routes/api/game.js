const router = require("express").Router();
const gameController = require("../../controllers/gameController");

router.route("/newChar")
    .post(gameController.newChar);
router.route("/newEn")
    .post(gameController.newEn);
router.route("/getChar")
    .get(gameController.getChar);
router.route("/getAllChars")
    .get(gameController.getAllChars);
router.route("/enemies")
    .get(gameController.getEns);
router.route("/update")
    .put(gameController.updateChar);

module.exports = router;