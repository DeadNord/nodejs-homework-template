const getContacts = require("./getContacts");
const updateContacts = require("./updateContacts");
const { v4 } = require("uuid");

const addContact = async (name, email, phone) => {
  const contacts = await getContacts();
  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = addContact;
