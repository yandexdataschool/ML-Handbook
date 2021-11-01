import glob from "fast-glob";

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}

/**
 * Get first item of array.
 * @param array
 */
const head = (array) => {
  return array && array.length ? array[0] : undefined;
};

/**
 * Get last item of array.
 * @param array
 */
const last = (array) => {
  const length = array == null ? 0 : array.length;

  return length ? array[length - 1] : undefined;
};

export type Params = {
  params: {
    slug: string;
  };
};

/**
 * Get all slugs for Next.js getStaticPaths() function.
 * @param articlesFolder string
 */
export const getAllArticleSlugs = (articlesFolder: string): Params[] => {
  // This glob is what will be used to generate static routes
  const contentGlob = `${articlesFolder}/**/*.mdx`;
  const allFilesArray = glob.sync(contentGlob);

  return allFilesArray.map((filePath) => {
    const filePathReplaced = filePath.replace(`${articlesFolder}/`, "");
    const filePathArray = filePathReplaced.split("/");
    const slug = filePathArray
      .filter((filePath) => filePath !== "index.mdx")
      .map((filePath) => {
        if (filePath.endsWith(".mdx")) {
          return filePath.replace(".mdx", "");
        }

        return filePath;
      })
      .join("/");

    return {
      params: { slug },
    };
  });
};
