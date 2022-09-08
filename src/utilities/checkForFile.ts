import path from "path";
import fs from "fs";

export default (fileName: string, folder: string): boolean => {
  const dir = fs.readdirSync(path.join(__dirname, folder));
  return dir.includes(fileName);
};
