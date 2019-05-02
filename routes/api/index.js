const router = require("express").Router();
const projectRoutes = require("./projects");
const contactRoutes = require("./messages");
const gameRoutes = require("./game");

router.use("/projects", projectRoutes);
router.use("/contacts", contactRoutes);
router.use("/game", gameRoutes);

module.exports = router;