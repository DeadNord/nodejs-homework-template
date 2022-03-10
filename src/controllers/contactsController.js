const {
  getContacts,
  getContactById,
  addContact,
  removeContactById,
  changeContact,
} = require("../models/contacts/index");

const getContactsController = async (req, res, next) => {
  getContacts().then(contacts => {
    res.json({
      status: "success",
      code: 200,
      data: {
        contacts,
      },
    });
  });
};

const getContactByIdController = async (req, res, next) => {
  const { id } = req.params;
  getContactById(id).then(contact => {
    if (contact) {
      res.json({
        status: "success",
        code: 200,
        data: {
          contact,
        },
      });
    }
    if (!contact) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact with id=${id} not found`,
      });
    }
  });
};

const addContactController = async (req, res, next) => {
  const { name, email, phone } = req.body;
  addContact(name, email, phone).then(newContact => {
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: newContact,
      },
    });
  });
};

const removeContactByIdController = async (req, res, next) => {
  const { id } = req.params;

  removeContactById(id).then(deleteContact => {
    if (deleteContact) {
      res.json({
        status: "success",
        code: 200,
        data: {
          result: deleteContact,
        },
      });
    }
    if (!deleteContact) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact with id=${id} not found`,
      });
    }
  });
};

const changeContactController = async (req, res, next) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  changeContact(id, name, email, phone).then(updateContact => {
    if (updateContact) {
      res.json({
        status: "success",
        code: 200,
        data: {
          result: updateContact,
        },
      });
    }
    if (!updateContact) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact with id=${id} not found`,
      });
    }
  });
};

module.exports = {
  getContactsController,
  getContactByIdController,
  addContactController,
  removeContactByIdController,
  changeContactController,
};
