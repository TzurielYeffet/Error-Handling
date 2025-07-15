const fs = require("fs");
const path = "./contacts.json";

// const load = function () {
//   let objArr = loadFile();
//   for (obj of objArr) {
//     if (obj.email === email) {
//       return objArr;
//     } else {
//       console.error(`✗ Error: No contact found with email: ${email}`);
//     }
//   }
// };

//this should only save the data
const save = function (obj) {
  try {
    fs.writeFileSync(obj, null, 2);
    console.log(`✓ Contact added: ${newContact.name}`);
    console.log(`✓ Contacts saved to ${path} `);
    return true;
  } catch (err) {
    console.error("✗ Failed to save contact:", err.message);
    return false;
  }
};

const load = function () {
  console.log("\nLoading contacts from contacts.json...\n");
  if (!fs.existsSync(path)) {
    console.log("✗ File not found - creating new contact list");
    return [];
  }

  try {
    const data = fs.readFileSync(path, "utf-8");
    if (data.length > 0) {
      console.log(`✓ Loaded ${objArr.length} contacts`);
    }
    return JSON.parse(data);
  } catch (err) {
    switch (err.code) {
      case "ENOENT":
        console.error("File or directory not found");
        break;
      case "ENOSPC":
        console.error("Disk is full");

      default:
        console.error(`✗ Some other error: ${err.code}`);

        break;
    }
    return [];
  }
};

module.exports = { save, load };
