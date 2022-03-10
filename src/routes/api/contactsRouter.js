const express = require("express");

const { validation } = require("../../middlewares/validationMiddleware");

const {
  getContactsController,
  getContactByIdController,
  addContactController,
  removeContactByIdController,
  putContactController,
  patchContactController,
} = require("../../controllers/contacts/index");

const { joiSchema, favoriteSchema } = require("../../models/contact");

const router = express.Router();

router.get("/", getContactsController);

router.get("/:id", getContactByIdController);

router.post("/", validation(joiSchema), addContactController);

router.delete("/:id", removeContactByIdController);

router.put("/:id", validation(joiSchema), putContactController);

router.patch(
  "/:id/favorite",
  validation(favoriteSchema),
  patchContactController,
);

module.exports = router;
