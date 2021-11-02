import path from "path";
import fs from "fs";

const last = (array) => {
  const length = array == null ? 0 : array.length;

  return length ? array[length - 1] : undefined;
};

export const copyFileToPublic = (filePath: string, additionalPath: string = ""): void => {
  const sourceFilePath = path.join(process.cwd(), filePath);
  const destinationPublicPath = path.join(process.cwd(), "public", additionalPath);

  if (!fs.existsSync(destinationPublicPath)) {
    fs.mkdirSync(destinationPublicPath);
  }

  const fileName = last(filePath.split("/"));
  const destinationFilePath = path.join(destinationPublicPath, fileName);

  fs.copyFileSync(sourceFilePath, destinationFilePath);
};
