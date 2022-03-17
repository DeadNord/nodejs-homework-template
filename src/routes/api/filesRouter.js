const express = require("express");
const multer = require("multer");
const path = require("path");

const {
  authMiddleware,
  validationMiddleware,
} = require("../../middlewares/index");

const {
  uploadFilesController,
  getFilesController,
} = require("../../controllers/files/index");

// const { joiSchema } = require("../../models/contact");

const router = express.Router();

router.post("/upload", uploadFilesController);

router.get("/download", getFilesController);

module.exports = router;
