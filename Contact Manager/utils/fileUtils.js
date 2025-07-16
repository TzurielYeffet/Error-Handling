const fs = require("fs");
const path = "./contacts.json";
const fileName = path.split('/').pop();
//this should only save the data
const save = function (obj) {
    
  try {
    fs.writeFileSync(path,JSON.stringify(obj, null, 2),'utf-8');
    console.log(`✓ Contacts saved to ${fileName} `);
    return true;
  } catch (err) {
    console.error("✗ Failed to save contact:", err.message);
    return false;
  }
};

const load = function () {
  console.log(`\nLoading contacts from ${fileName}...\n`);
  if (!fs.existsSync(path)) {
    console.log("✗ File not found - creating new contact list");
    return [];
  }

  try {
    let data = fs.readFileSync(path, "utf-8");
    // console.log(data);
    data = JSON.parse(data)
    console.log(data.length);
    
    if (data.length > 0) {
      console.log(`✓ Loaded ${data.length} contacts`);
    }
    return data;
  } catch (err) {
    switch (err.code) {
      case "ENOENT":
        console.error("File or directory not found");
        break;
      case "ENOSPC":
        console.error("Disk is full");
        break;
      default:
        console.error(`✗ Some other error: ${err.code}`);

        break;
    }
    return [];
  }
};

module.exports = { save, load };
