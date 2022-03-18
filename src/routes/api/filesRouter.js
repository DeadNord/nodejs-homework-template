const express = require("express");
const multer = require("multer");
const path = require("path");
const { v4 } = require("uuid");

const FILE_DIR = path.resolve("./tmp");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FILE_DIR);
  },
  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split(".");
    cb(null, `${v4()}.${extension}`);
  },
});

// const {
//   authMiddleware,
//   validationMiddleware,
// } = require("../../middlewares/index");
const uploadMiddleware = multer({ storage });

const {
  uploadFilesController,
  // downloadFilesController,
} = require("../../controllers/files/index");

// const { joiSchema } = require("../../models/contact");

const router = express.Router();

router.post(
  "/upload",
  uploadMiddleware.single("avatar"),
  uploadFilesController,
);

router.use("/download", express.static(FILE_DIR));

module.exports = router;
