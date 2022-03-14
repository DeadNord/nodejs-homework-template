const express = require("express");

const { authMiddleware } = require("../../middlewares/index");

const {
  getCurrentController,
  patchSubscriptionController,
} = require("../../controllers/users/index");

const router = express.Router();

router.get("/current", authMiddleware, getCurrentController);
router.patch("/", authMiddleware, patchSubscriptionController);

module.exports = router;
