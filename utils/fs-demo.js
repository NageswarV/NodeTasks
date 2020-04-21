const fs = require("fs");
const path = require("path");
const readDir = require("./readDir");
if (process.argv.length < 3) {
  throw new Error("Its an Empty Value");
}
var [, , dir_name] = process.argv;
dir_path = path.join(__dirname, dir_name);
var stats = fs.statSync(dir_path);
if (stats.isDirectory()) {
  readDir(dir_path);
} else {
  throw new Error("It is not a directory");
}
