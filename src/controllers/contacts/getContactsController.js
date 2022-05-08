const { Contact } = require('../../models/index');
// const { findAllContacts } = require('../../services/mongo/index');

const getContactsController = async (req, res, next) => {
  const { _id } = req.user;

  const { favorite = false, page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const contacts = await Contact.find({ owner: _id }, '', {
    skip,
    limit: +limit,
  });

  if (Boolean(favorite) === true) {
    contacts = await contacts.find(x => x.favorite === Boolean(favorite));
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      contacts,
    },
  });
};

module.exports = getContactsController;
