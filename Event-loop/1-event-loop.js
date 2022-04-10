const { readFile } = require("fs");

console.log("started the first task");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("This is operational task");
});
console.log("This is the end of task");
