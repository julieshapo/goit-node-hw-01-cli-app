const {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");
const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await getAllContacts();
      return console.table(allContacts);
    case "get":
      const contactById = await getContactById(id);
      return console.log(contactById);
    case "remove":
      const contactToRemove = await removeContact(id);
      console.log(contactToRemove);
    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "rsKkOQUi80UsgVPCcLZZW" });
// invokeAction({ action: "remove", id: "rsKkOQUi80UsgVPCcLZZW" });
// invokeAction({
//   action: "add",
//   name: "Julie Shapo",
//   email: "js@gmail.com",
//   phone: "11111111",
// });
