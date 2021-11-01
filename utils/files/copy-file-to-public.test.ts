import mock from "mock-fs";
import fs from "fs";
import { copyFileToPublic } from "./copy-file-to-public";

beforeEach(function () {
  mock({
    public: mock.directory({
      items: {
        "additional-folder": mock.directory({
          items: {},
        }),
      },
    }),
    "folder-name/file-name.ext": mock.file({
      content: "content",
    }),
  });
});
describe("copyFileToPublic", () => {
  it("should copy file correctly", () => {
    copyFileToPublic("folder-name/file-name.ext");
    expect(fs.existsSync("public/file-name.ext")).toBeTruthy();
    expect(String(fs.readFileSync("public/file-name.ext"))).toBe("content");
  });
  it("should copy file in additional folder", () => {
    copyFileToPublic("folder-name/file-name.ext", "additional-folder");
    expect(fs.existsSync("public/additional-folder/file-name.ext")).toBeTruthy();
    expect(String(fs.readFileSync("public/additional-folder/file-name.ext"))).toBe("content");
  });
});
afterEach(mock.restore);
