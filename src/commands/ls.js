import { readdir } from "node:fs/promises";

export const list = async () => {
  try {
    const currDir = process.cwd();
    const files = await readdir(currDir);
    for (const file of files) console.log(file);
  } catch (err) {
    console.log("FS operation failed");
  }
};
