const router = require("express").Router();
const projectRoutes = require("./projects")
const contactRoutes = require("./messages");

router.use("/projects", projectRoutes);
router.use("/contacts", contactRoutes);

module.exports = router;