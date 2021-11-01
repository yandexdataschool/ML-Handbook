import path from "path";
import fs from "fs";

const last = (array) => {
  const length = array == null ? 0 : array.length;

  return length ? array[length - 1] : undefined;
};

export const copyFileToPublic = (filePath: string, additionalPath: string = ""): void => {
  const fullFilePath = path.join(process.cwd(), filePath);
  const publicPath = path.join(process.cwd(), "public", additionalPath);
  const fileName = last(filePath.split("/"));
  const publicFilePath = path.join(publicPath, fileName);

  fs.copyFileSync(fullFilePath, publicFilePath);
};
