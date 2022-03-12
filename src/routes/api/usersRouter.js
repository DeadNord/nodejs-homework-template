const express = require("express");

const { authMiddleware } = require("../../middlewares/index");

const { getCurrentController } = require("../../controllers/users/index");

const router = express.Router();

router.get("/current", authMiddleware, getCurrentController);

module.exports = router;
