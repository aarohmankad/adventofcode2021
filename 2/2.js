const fs = require("fs");

let buffer = fs.readFileSync(__dirname + "/input");
const numbers = buffer
  .toString()
  .split("\n")
  .filter((n) => n.length);

console.log();
