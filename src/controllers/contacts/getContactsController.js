const { Contact } = require("../../models/index");

const getContactsController = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const { favorite } = req.query;
  const skip = (page - 1) * limit;

  const contacts = await Contact.find(
    { owner: _id },
    // {favorite === true ? favorite: favorite : null},
    "",
    {
      skip,
      limit: +limit,
    },
  ).populate("owner", "_id name email");

  res.json({
    status: "success",
    code: 200,
    data: {
      contacts,
    },
  });
};

module.exports = getContactsController;
