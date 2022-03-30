const { Contact } = require("../../models/index");

const getContactsController = async (req, res, next) => {
  const contacts = await Contact.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      contacts,
    },
  });
};

module.exports = getContactsController;
