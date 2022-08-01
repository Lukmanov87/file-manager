import { showCurrentDirectory } from "./commands/showCurrentDir.js";
import { list } from "./commands/ls.js";
import { argv, stdin as input, stdout as output } from "node:process";
import { createInterface } from "node:readline";

showCurrentDirectory();

const enteredUserName = argv[2].split("=")[1];
const rl = createInterface({
  input,
  output,
});
console.log(`Welcome to the File Manager, ${enteredUserName}!`);

rl.on("line", (command) => {
  const input = command.trim();

  switch (input) {
    case ".exit":
      console.log(`Thank you for using File Manager, ${enteredUserName}!`);
      rl.close();
      break;
    case "ls":
      (async () => {
        try {
          const files = await list();
          console.log(files);
          showCurrentDirectory();
        } catch (err) {
          throw err;
        }
      })();

    default:
      break;
  }
});
rl.on("close", () => {
  console.log(`Thank you for using File Manager, ${enteredUserName}!`);
});
