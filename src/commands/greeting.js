import { argv, stdin as input, stdout as output } from "node:process";
import { createInterface } from "node:readline";

export const greeting = async () => {
  const enteredUserName = argv[2].split("=")[1];
  const rl = createInterface({
    input,
    output,
  });
  console.log(`Welcome to the File Manager, ${enteredUserName}!`);  

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${enteredUserName}`);
  });
}