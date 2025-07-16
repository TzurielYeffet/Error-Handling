const fileUtils = require("../utils/fileUtils.js");
const validation = require("../utils/validation.js");

const validate = validation;

const addContact = function (contact) {
  const contacts = fileUtils.load();
  console.log(contacts);
  if (validate.validateEmail(contact.email)) {
    if (validate.validatePhone(contact.phone)) {
      const exists = contacts.find((c) => c.email === contact.email);
      if (exists) {
        console.error("✗ Error: Contact with this email already exists");
      } else {
        contacts.push(contact);
        console.log(`Added contact to contacts list`);
        console.log(`✓ Contact added: ${obj[obj.length - 1].name}`);
        fileUtils.save(contacts);
      }
    }
  }
  return;
};

const deleteContact = function (email) {
  if (validate.validateEmail(email)) {
    let objArr = fileUtils.load();
    let objToBeDeleted = objArr.find((obj) => obj.email === email);
    if (typeof objToBeDeleted === "undefined") {
      console.log(`✗ Error: No contact found with email: ${email} `);
      return;
    }

    alteredArr = objArr.filter((obj) => obj.email !== email);
    let success = fileUtils.save(alteredArr);
    if (success) {
      console.log(`✓ Contact deleted: ${objToBeDeleted.name}`);
    }
  }
};

const listContact = function () {
  let contacts = fileUtils.load();
  console.log("\n=== All Contacts ===\n");
  for (c of contacts) {
    console.log(`${c.name} - ${c.email} - ${c.phone}`);
  }
};

const searchContacts = function (name) {
  let contacts = fileUtils.load();
  let result = contacts.filter((obj) =>
    obj.name.toLowerCase().includes(name.toLowerCase())
  );
  console.log(`\n=== Search Results for "${name}" ===\n`);
  if (result.length > 0) {
    for (let i = 0; i < result.length; i++) {
      console.log(
        `${i + 1}. ${result[i].name} - ${result[i].email} - ${result[i].phone}`
      );
    }
  } else {
    console.log(`No contacts found matching "${name}"`);
  }
};

const help = function () {
  console.log(`Usage: node contacts.js [command] [arguments]

Commands:
  add "name" "email" "phone"  - Add a new contact
  list                        - List all contacts
  search "query"              - Search contacts by name or email
  delete "email"              - Delete contact by email
  help                        - Show this help message
  
  
  Examples:
  node contacts.js add "John Doe" "john@example.com" "555-123-4567"
  node contacts.js search "john"
  node contacts.js delete "john@example.com"`);
};

module.exports = {
  addContact,
  deleteContact,
  searchContacts,
  listContact,
  help,
};
