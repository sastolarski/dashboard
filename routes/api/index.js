const router = require("express").Router();
const userRoutes = require("./users");

// // API Routes
router.use("/users", userRoutes);

// If no API routes are hit, send the React app


module.exports = router;