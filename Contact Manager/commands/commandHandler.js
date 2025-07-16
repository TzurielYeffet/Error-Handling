const contactService = require("../services/contactService.js");

const handleCommand = function (data) {
  switch (data.command) {
    case "add":
      if (
        typeof data.contact.name === "undefined" ||
        typeof data.contact.email === "undefined" ||
        typeof data.contact.phone === "undefined"
      ) {
        console.log(`✗ Error: Missing arguments for ${data.command} command`);
        console.log(
          `Usage: node contacts.js ${data.command} "name" "email" "phone"`
        );
        return;
      }
      contactService.addContact(data.contact);
      break;
    case "list":
      contactService.listContact();
      break;
    case "delete":
      if (typeof data.contact.name === "undefined") {
        console.log(`✗ Error: Missing arguments for ${data.command} command`);
        console.log(`Usage: node contacts.js ${data.command} "email"`);
        return;
      }
      contactService.deleteContact(data.contact.name);
      break;
    case "search":
      if (typeof data.contact.name === "undefined") {
        console.log(`✗ Error: Missing arguments for ${data.command} command`);
        console.log(`Usage: node contacts.js ${data.command} "naem"`);
        return;
      }
      contactService.searchContacts(data.contact.name);
      break;
    case "help":
      contactService.help();
      break;
    default:
      console.log(`✗ Error: Unknown command '${data.command}'`);
      console.log(
        "Usage: node contacts.js [add|list|search|delete|help] [arguments]"
      );
      break;
  }
};

module.exports = { handleCommand };
