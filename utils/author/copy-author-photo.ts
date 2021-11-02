import path from "path";
import { copyFileToPublic } from "../files/copy-file-to-public";

export const copyAuthorPhoto = (photoUri: string): void => {
  const photoFileName = photoUri.replace("/handbook/", "");
  const additionalPath = photoUri
    .slice(1) // remove first '/'
    .split("/") // use '/' because uri, not directory
    .filter((part) => {
      // exclude file
      if (part.includes(".")) {
        return false;
      }

      return part;
    })
    .join(path.sep);

  copyFileToPublic(photoFileName, additionalPath);
};
