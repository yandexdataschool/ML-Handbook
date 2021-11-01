import mock from "mock-fs";
import fs from "fs";
import { copyAuthorPhoto } from "./copy-author-photo";

beforeEach(() => {
  mock({
    public: mock.directory({
      items: {
        authors: mock.directory({
          items: {},
        }),
      },
    }),
    "authors/with-photo/photo.jpg": mock.file({
      content: "content",
    }),
  });
});
describe("copyAuthorPhoto", () => {
  it("should copy author with photo", () => {
    copyAuthorPhoto("/authors/with-photo/photo.jpg");
    expect(fs.existsSync("public/authors/with-photo/photo.jpg")).toBeTruthy();
    expect(String(fs.readFileSync("public/authors/with-photo/photo.jpg"))).toBe("content");
  });
});
afterEach(mock.restore);
