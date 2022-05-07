const { Contact } = require('../../models/index');

const getContactsController = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const favorite = req.query.favorite;
  const skip = (page - 1) * limit;
  let contacts = [];

  contacts = await Contact.find({ owner: _id }, '', {
    skip,
    limit: +limit,
  }).populate('owner', '_id name email phone');

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
