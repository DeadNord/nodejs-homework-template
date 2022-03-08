const getContacts = require("./getContacts");
const updateContacts = require("./updateContacts");

const removeContactById = async id => {
  const contacts = await getContacts();
  const idx = contacts.findIndex(item => item.id === id);
  if (idx === -1) {
    return null;
  }
  const deleteContact = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return deleteContact;
};

module.exports = removeContactById;
