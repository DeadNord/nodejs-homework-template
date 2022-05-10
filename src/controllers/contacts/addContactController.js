const { Contact } = require('../../models/index');
const { Conflict } = require('http-errors');

const addContactController = async (req, res, next) => {
  const { _id } = req.user;
  const { email } = req.body;

  const contact = await Contact.findOne({ email });

  if (contact) {
    res.status(409).json(Conflict(`Contact with ${email} already exist`));
  }

  const newContact = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: newContact,
    },
  });
};

module.exports = addContactController;
