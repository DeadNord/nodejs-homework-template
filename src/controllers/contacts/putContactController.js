// const { changeContact } = require("../../models/contacts/index");

// const changeContactController = async (req, res, next) => {
//   const { id } = req.params;
//   const { name, email, phone } = req.body;
//   changeContact(id, name, email, phone).then(updateContact => {
//     if (updateContact) {
//       res.json({
//         status: "success",
//         code: 200,
//         data: {
//           result: updateContact,
//         },
//       });
//     }
//     if (!updateContact) {
//       res.status(404).json({
//         status: "error",
//         code: 404,
//         message: `Contact with id=${id} not found`,
//       });
//     }
//   });
// };

// module.exports = changeContactController;

const { Contact } = require("../../models/index");

const putContactController = async (req, res, next) => {
  const { id } = req.params;
  //   const { name, email, phone } = req.body;
  const updateContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
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
};

module.exports = putContactController;
