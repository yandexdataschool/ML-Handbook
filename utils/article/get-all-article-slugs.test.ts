jest.mock("fast-glob");
import glob from "fast-glob";

// @ts-ignore
glob.__setMockFiles([
  "handbook/chapter-name/another-article.mdx",
  "handbook/chapter-name/index.mdx",
  "handbook/section-name/chapter-name/another-article.mdx",
  "handbook/section-name/chapter-name/index.mdx",
]);

import { getAllArticleSlugs } from "./get-all-article-slugs";

describe("get static paths", () => {
  it("should return array of paths", () => {
    const staticPaths = getAllArticleSlugs("handbook");

    expect(staticPaths).toContainEqual({
      params: {
        slug: "chapter-name/another-article",
      },
    });
    expect(staticPaths).toContainEqual({
      params: {
        slug: "chapter-name",
      },
    });
    expect(staticPaths).toContainEqual({
      params: {
        slug: "section-name/chapter-name/another-article",
      },
    });
    expect(staticPaths).toContainEqual({
      params: {
        slug: "section-name/chapter-name",
      },
    });
  });
});
