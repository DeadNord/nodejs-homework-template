const express = require("express");
const multer = require("multer");
const path = require("path");
const { v4 } = require("uuid");

const {
  uploadFilesController,
  // downloadFilesController,
} = require("../../controllers/files/index");

const FILE_DIR = path.resolve("./public/avatars");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FILE_DIR);
  },
  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split(".");
    cb(null, `${v4()}.${extension}`);
  },
});

const uploadMiddleware = multer({ storage });

const router = express.Router();

router.post(
  "/upload",
  uploadMiddleware.single("avatar"),
  uploadFilesController,
);

router.use("/download", express.static(FILE_DIR));

module.exports = router;
