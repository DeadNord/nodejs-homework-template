const { Contact } = require("../../models/index");

const addContactController = async (req, res, next) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newContact,
    },
  });
};

module.exports = addContactController;
