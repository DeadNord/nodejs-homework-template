const getContactsController = require("./getContactsController");
const getContactByIdController = require("./getContactByIdController");
const addContactController = require("./addContactController");
const removeContactByIdController = require("./removeContactByIdController");
const putContactController = require("./putContactController");
const patchContactController = require("./patchContactController");

module.exports = {
  getContactsController,
  getContactByIdController,
  addContactController,
  removeContactByIdController,
  putContactController,
  patchContactController,
};
