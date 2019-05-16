const router = require("express").Router();
const gameController = require("../../controllers/gameController");

router.route("/newChar")
    .post(gameController.newChar);
router.route("/newEn")
    .post(gameController.newEn);
router.route("/newEnv")
    .post(gameController.newEnv);
router.route("/env")
    .get(gameController.getEnv);
router.route("/char")
    .get(gameController.getChar);
router.route("/allChars")
    .get(gameController.getAllChars);
router.route("/enemies")
    .get(gameController.getEns);
router.route("/update")
    .put(gameController.updateChar);

module.exports = router;