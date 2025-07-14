//Ex1
const safeJsonParse = function (json) {
  try {
    let parsedJson = JSON.parse(json);
    return parsedJson;
  } catch (err) {
    return "Invalid JSON format";
  }
};

console.log(safeJsonParse('{"name": "John"}'));
// Output: { name: "John" }

console.log(safeJsonParse("invalid json"));
// Output: "Invalid JSON format"

// Ex2

const fs = require("fs");

const readFileWithErrorHandling = function (filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      switch (err.code) {
        case "ENOENT":
          console.error(`Error: The file "${filePath}" does not exist.`);
          break;
        case "EISDIR":
          console.error(`Error: "${filePath}" is a directory, not a file.`);
          break;
        default:
          console.error(`Unknown error while reading "${filePath}": ${err.message}`
          );
      }
      return;
    }

    const fileSize = Buffer.byteLength(data,'utf-8');
    console.log(`Success: "File read successfully. Size: ${fileSize}"`);
    
  });
};

readFileWithErrorHandling("existing.txt", (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});
