// JavasScript solution

// Define the coded message elements in and array

// Define and read file one line at a time
const fs = require("fs");
let decodeFile = "C:UserscrewrOneDriveDesktopDecodeMessage.txt";

try {
  const allText = fs.readFileSync(decodeFile, "utf8");
  const lines = allText.split("\n");
  for (let i = 0; i < lines.length; i++) {
    // Process the line here
    console.log(`Line: ${lines[i]}`);
  }
} catch (err) {
  console.error("Error reading file:", err);
}

// Pull the last number from each line loaded

// Look up the encoded message in the array by number

// Added the decoded message element to the message0

// Display the message
