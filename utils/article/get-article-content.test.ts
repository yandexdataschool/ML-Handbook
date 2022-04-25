import mock from "mock-fs";
import { getArticleContent } from "./get-article-content";

beforeEach(() => {
  mock({
    authors: {
      "with-photo": {
        "index.md": `---
name: With Photo
email: with-photo@email.com
photo: ./photo.jpg
---
`,
      },
    },
    handbook: {
      "chapter-name": {
        "index.mdx": `---
title: Title
description: Description
hero_image: ./photo.jpg
hero_image_alt: A grey and white pitbull wading happily in a pool
authors: with-photo
---
Some file content
`,
        "another-article.mdx": `---
title: Title
hero_image: ./photo.jpg
hero_image_alt: A grey and white pitbull wading happily in a pool
authors: with-photo
---
Some file content
`,
      },
    },
  });
});
describe("getArticleContent()", () => {
  it("should return content for chapter-name/another-article from handbook/chapter-name/another-article.mdx", () => {
    const { content, frontMatter } = getArticleContent("handbook", "chapter-name/another-article");
    expect(content).toBe("Some file content\n");
    expect(frontMatter).toEqual({
      title: "Title",
      description: null,
      heroImage: {
        alt: "A grey and white pitbull wading happily in a pool",
        src: "/handbook/chapter-name/another-article/images/photo.jpg",
      },
      authors: [
        {
          email: "with-photo@email.com",
          name: "With Photo",
          photo: "/handbook/authors/with-photo/photo.jpg",
        },
      ],
    });
  });
  it("should return content for chapter-name from handbook/chapter-name/index.mdx", () => {
    const { content, frontMatter } = getArticleContent("handbook", "chapter-name");
    expect(content).toBe("Some file content\n");
    expect(frontMatter).toEqual({
      title: "Title",
      description: "Description",
      heroImage: {
        alt: "A grey and white pitbull wading happily in a pool",
        src: "/handbook/chapter-name/images/photo.jpg",
      },
      authors: [
        {
          email: "with-photo@email.com",
          name: "With Photo",
          photo: "/handbook/authors/with-photo/photo.jpg",
        },
      ],
    });
  });
});
afterEach(mock.restore);
