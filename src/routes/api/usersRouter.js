const express = require("express");

const { authMiddleware } = require("../../middlewares/index");

const {
  getCurrentController,
  patchSubscriptionController,
  patchAvatarController,
} = require("../../controllers/users/index");

// const FILE_DIR = path.resolve("./tmp");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, FILE_DIR);
//   },
//   filename: (req, file, cb) => {
//     const [, extension] = file.originalname.split(".");
//     cb(null, `${v4()}.${extension}`);
//   },
// });

// const uploadMiddleware = multer({ storage });
// uploadMiddleware.single("avatar"),

const router = express.Router();

router.get("/current", authMiddleware, getCurrentController);
router.patch("/", authMiddleware, patchSubscriptionController);
router.patch("/avatars", authMiddleware, patchAvatarController);

module.exports = router;
