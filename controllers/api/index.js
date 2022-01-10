const router = require("express").Router();
const blogRoutes = require("./blogRoutes");
const packingRoutes = require("./packingRoutes");
const tripRoutes = require("./tripRoutes");
const userRoutes = require("./userRoutes");

router.use("/blog", blogRoutes);
router.use("/packing", packingRoutes);
router.use("/trip", tripRoutes);
router.use("/users", userRoutes);

module.exports = router;
