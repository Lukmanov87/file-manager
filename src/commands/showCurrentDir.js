import { homedir } from 'node:os';

export const showCurrentDirectory = async () => {
  const currDir = homedir()
  console.log(`You are currently in: ${currDir}`);
}
