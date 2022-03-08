const express = require("express");

const {
  addContactValidation,
  putContactValidation,
} = require("../../middlewares/validationMiddleware");

const {
  getContactsController,
  getContactByIdController,
  addContactController,
  removeContactByIdController,
  changeContactController,
} = require("../../controllers/contactsController");

const router = express.Router();

router.get("/", getContactsController);

router.get("/:id", getContactByIdController);

router.post("/", addContactValidation, addContactController);

router.delete("/:id", removeContactByIdController);

router.put("/:id", putContactValidation, changeContactController);

module.exports = router;
