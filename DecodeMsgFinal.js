// JavasScript solution

// Define the coded message elements in and array
const decodeKeys = [[1], [2, 3], [4, 5, 6]];

// Define and read file one line at a time
const fs = require("fs");
const path = require("path");
const filepath = path.join(
  "C:",
  "users",
  "crewr",
  "source",
  "repos",
  "DecodeMessage",
  "FinalMessage.txt"
);
let decodedMessage = "";

// Convert the stair-step array into a flat array of values (last array value only)
let keyList = [];

decodeKeys.forEach((subArray) => {
  const lastNumber = subArray[subArray.length - 1];
  keyList.push(lastNumber);
});

let keyIndex = 0;

try {
  // Open and load the file given the decode messages with key
  const allText = fs.readFileSync(filepath, "utf-8");
  const lineContents = allText.split("\r\n");
  console.log(allText);
  let lines = [];

  // Split each the lines into the line array
  for (i = 0; i < lineContents.length; i++) {
    lines = lineContents.map((str) => str.split(" "));
  }

  // Find each word in the lines array using the keyList decoder values
  for (let i = 0; i < keyList.length; i++) {
    try {
      const foundWord = lines.find((subArray) => subArray[0] == keyList[i]);

      if (foundWord[1] != undefined) {
        if (i < keyList.length - 1) {
          decodedMessage += foundWord[1] + " ";
        } else {
          decodedMessage += foundWord[1];
        }
      }
    } catch (err) {
      console.error("Decryption error");
    }
  }
} catch (err) {
  console.error("Error reading file:", err);
}

// Report the final decoded message
// Solution: "design all skill"
console.log(decodedMessage);
