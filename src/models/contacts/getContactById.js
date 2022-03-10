const getContacts = require("./getContacts");

const getContactById = async id => {
  const contacts = await getContacts();
  const contact = contacts.find(item => item.id === id);
  return contact;
};
module.exports = getContactById;
