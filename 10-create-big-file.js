const { writeFileSync } = require("fs");

for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/big-file.txt", `Id:${i} and roll on:${i * 4}\n`, {
    flag: "a",
  });
}
