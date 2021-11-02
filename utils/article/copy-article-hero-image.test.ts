import mock from "mock-fs";
import fs from "fs";
import { copyArticleHeroImage } from "./copy-article-hero-image";

beforeEach(() => {
  mock({
    public: {
      handbook: {
        "chapter-name": {
          "another-article": {
            images: {
              "image.jpg": "content",
            },
          },
        },
      },
    },
    "handbook/chapter-name/another-article/images/image.jpg": mock.file({
      content: "content",
    }),
  });
});
describe("copyArticleHeroImage", () => {
  it("should copy author with photo", () => {
    copyArticleHeroImage("/handbook/chapter-name/another-article/images/image.jpg");
    expect(fs.existsSync("public/handbook/chapter-name/another-article/images/image.jpg")).toBeTruthy();
    expect(String(fs.readFileSync("public/handbook/chapter-name/another-article/images/image.jpg"))).toBe("content");
  });
});
afterEach(mock.restore);
