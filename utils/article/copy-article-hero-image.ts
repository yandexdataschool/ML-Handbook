import path from "path";
import { copyFileToPublic } from "../files/copy-file-to-public";

export const copyArticleHeroImage = (photoUri: string): void => {
  const photoFileName = photoUri.slice(1); // remove first '/'
  const additionalPath = photoFileName
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
