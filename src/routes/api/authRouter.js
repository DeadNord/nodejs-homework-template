const express = require("express");

const { validation } = require("../../middlewares/validationMiddleware");

const {
  signUpController,
  signInController,
  //   addContactController,
  //   removeContactByIdController,
  //   putContactController,
  //   patchContactController,
} = require("../../controllers/auth/index");

const { joiSchema } = require("../../models/user");

const router = express.Router();

// router.get("/", getContactsController);

// router.get("/:id", getContactByIdController);

router.post("/signup", validation(joiSchema), signUpController);

router.post("/signin", validation(joiSchema), signInController);

// router.delete("/:id", removeContactByIdController);

// router.put("/:id", validation(joiSchema), putContactController);

// router.patch(
//   "/:id/favorite",
//   validation(favoriteSchema),
//   patchContactController,
// );

module.exports = router;
