const fs = require("fs");
const path = "./contacts.json";

const load = function (email) {
  let objArr = loadFile();
  for (obj of objArr) {
    if (obj.email === email) {
      console.log("✗ Error: Contact with this email already exists");
    } else {
        console.error(`✗ Error: No contact found with email: ${email}`);
    }
  }
};

const save = function (obj) {
  let objArr = loadFile();
  if (objArr.length > 0) {
    console.log(`✓ Loaded ${objArr.length} contacts`);
    for (obj of objArr) {
      if (obj.email === email) {
        console.error("✗ Error: Contact with this email already exists");
      } else {
        fs.writeFileSync(path, JSON.stringify(obj, null, 2));
      }
    }
    return true;
  }
  return false;
};

const loadFile = function () {
  console.log("\nLoading contacts from contacts.json...\n");
  if (!fs.existsSync(path)) {
    console.log("✗ File not found - creating new contact list");
    return [];
  }

  try{
      const data = fs.readFileSync(path, "utf-8");
      return JSON.parse(data);
  }catch(err){
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
}


module.exports = {save,load}