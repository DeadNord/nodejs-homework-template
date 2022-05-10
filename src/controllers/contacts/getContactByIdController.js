const { Contact } = require('../../models/index');

const getContactByIdController = async (req, res, next) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);

  if (contact) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        contact,
      },
    });
  }
  if (!contact) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: `Contact with id=${id} not found`,
    });
  }
};

module.exports = getContactByIdController;
