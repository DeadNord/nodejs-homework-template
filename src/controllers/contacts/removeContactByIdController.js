

const { Contact } = require("../../models/index");

const removeContactByIdController = async (req, res, next) => {
  const { id } = req.params;

  const deleteContact = await Contact.findByIdAndRemove(id);

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
};

module.exports = removeContactByIdController;
