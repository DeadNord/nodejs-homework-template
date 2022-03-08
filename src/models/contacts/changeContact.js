const getContacts = require("./getContacts");
const updateContacts = require("./updateContacts");

const changeContact = async (id, name, email, phone) => {
  const contacts = await getContacts();
  const idx = contacts.findIndex(item => item.id === id);

  contacts.forEach(contact => {
    if (contact.id === id) {
      contact.name = name;
      contact.email = email;
      contact.phone = phone;
    }
  });

  await updateContacts(contacts);
  return contacts[idx];
};

module.exports = changeContact;
