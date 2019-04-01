const router = require("express").Router();
const contactController = require("../../controllers/contactController");

router.route("/message")
    .post(contactController.message);
router.route("/resume")
    .post(contactController.request);

module.exports = router;