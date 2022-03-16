// const { addContact } = require("../../models/contacts/index");

// const addContactController = async (req, res, next) => {
//   const { name, email, phone } = req.body;
//   addContact(name, email, phone).then(newContact => {
//     res.status(201).json({
//       status: "success",
//       code: 201,
//       data: {
//         result: newContact,
//       },
//     });
//   });
// };

// module.exports = addContactController;

const { Contact } = require("../../models/index");

const addContactController = async (req, res, next) => {
  const { _id } = req.user;
  const newContact = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newContact,
    },
  });
};

module.exports = addContactController;
