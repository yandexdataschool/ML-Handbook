import mock from "mock-fs";
import fs from "fs";
import { copyFileToPublic } from "./copy-file-to-public";

beforeEach(function () {
  mock({
    public: mock.directory({
      items: {},
    }),
    "folder-name/file-name.ext": mock.file({
      content: "content",
    }),
  });
});
describe("copyFileToPublic", () => {
  it("should pass correctly", () => {
    copyFileToPublic("folder-name/file-name.ext");
    expect(fs.existsSync("public/file-name.ext")).toBeTruthy();
    expect(String(fs.readFileSync("public/file-name.ext"))).toBe("content");
  });
});
afterEach(mock.restore);
