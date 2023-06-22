const contacts = require("./db");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.getAllContacts();
      return console.log(allContacts);
    case "getById":
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);
    case "remove":
      const contactToRemove = await contacts.removeContact(id);
      console.log(contactToRemove);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
  }
};

invokeAction({ action: "read" });

module.exports = {
  invokeAction,
};
