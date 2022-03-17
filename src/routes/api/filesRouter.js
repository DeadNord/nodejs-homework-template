const express = require("express");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("./tmp"));
  },
  filename: (req, file, cb) => {
    const [filename, extension] = file.originalname.split(".");
    cb(null, `${filename}.${extension}`);
  },
});

// const {
//   authMiddleware,
//   validationMiddleware,
// } = require("../../middlewares/index");
const uploadMiddleware = multer({ storage });

const {
  uploadFilesController,
  // getFilesController,
} = require("../../controllers/files/index");

// const { joiSchema } = require("../../models/contact");

const router = express.Router();

router.post(
  "/upload",
  uploadMiddleware.single("avatar"),
  uploadFilesController,
);

// router.get("/download", getFilesController);

module.exports = router;
