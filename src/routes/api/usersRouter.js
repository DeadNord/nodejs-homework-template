const express = require("express");

const { authMiddleware } = require("../../middlewares/index");

const {
  getCurrentController,
  patchSubscriptionController,
  patchAvatarController,
} = require("../../controllers/users/index");

const router = express.Router();

router.get("/current", authMiddleware, getCurrentController);
router.patch("/", authMiddleware, patchSubscriptionController);
router.patch("/avatars", authMiddleware, patchAvatarController);

module.exports = router;
