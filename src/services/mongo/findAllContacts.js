const { Contact } = require('../../models/index');

const findAllContacts = async (_id, favorite = false, skip = 0, limit = 10) => {
  let contacts = await Contact.find({ owner: _id }, '', {
    skip,
    limit: +limit,
  });
  if (Boolean(favorite) === true) {
    contacts = await contacts.find(x => x.favorite === Boolean(favorite));
  }

  .then(()=> {return contacts});
};

module.exports = findAllContacts;
