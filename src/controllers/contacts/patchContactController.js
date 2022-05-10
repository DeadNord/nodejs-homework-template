const { Contact } = require('../../models/index');

const patchContactController = async (req, res, next) => {
  const { id } = req.params;
  const { favorite } = req.body;

  const updateContact = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    {
      new: true,
    },
  );
  if (updateContact) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result: updateContact,
      },
    });
  }
  if (!updateContact) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: `Contact with id=${id} not found`,
    });
  }
};

module.exports = patchContactController;
