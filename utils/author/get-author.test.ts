import mock from "mock-fs";
import { getAuthor, getAuthors } from "./get-author";

beforeEach(() => {
  mock({
    "authors/with-empty-email": mock.directory({
      items: {
        "index.md": `---
name: With Empty Email
---
`,
      },
    }),
    "authors/with-empty-photo": mock.directory({
      items: {
        "index.md": `---
name: With Empty Photo
email: with-empty-photo@email.com
---
`,
      },
    }),
    "authors/with-photo": mock.directory({
      items: {
        "index.md": `---
name: With Photo
email: with-photo@email.com
photo: "./photo.jpg"
---
`,
      },
    }),
    "authors/with-photo-russian": mock.directory({
      items: {
        "index.md": `---
name: With Photo Russian
email: with-photo-russian@email.com
photo: ./Фото с Пробелами и на русском.JPG
---
`,
      },
    }),
    "authors/without-photo": mock.directory({
      items: {
        "index.md": `---
name: Without Photo
email: without-photo@email.com
---
`,
      },
    }),
  });
});
describe("getAuthor", () => {
  it("should return correct author without email", () => {
    const author = getAuthor("with-empty-email");
    expect(author.name).toBe("With Empty Email");
    expect(author.email).toBeNull();
    expect(author.photo).toBeNull();
  });
  it("should return correct author without photo", () => {
    const author = getAuthor("without-photo");
    expect(author.name).toBe("Without Photo");
    expect(author.email).toBe("without-photo@email.com");
    expect(author.photo).toBeNull();
  });
  it("should return correct author with empty photo", () => {
    const author = getAuthor("with-empty-photo");
    expect(author.name).toBe("With Empty Photo");
    expect(author.email).toBe("with-empty-photo@email.com");
    expect(author.photo).toBeNull();
  });
  it("should return correct author with photo", () => {
    const author = getAuthor("with-photo");
    expect(author.name).toBe("With Photo");
    expect(author.email).toBe("with-photo@email.com");
    expect(author.photo).toBe("/handbook/authors/with-photo/photo.jpg");
  });

  it("should return correct author with photo file in russian", () => {
    const author = getAuthor("with-photo-russian");
    expect(author.name).toBe("With Photo Russian");
    expect(author.email).toBe("with-photo-russian@email.com");
    expect(author.photo).toBe("/handbook/authors/with-photo-russian/foto-s-probelami-i-na-russkom.jpg");
  });
  it("should return correct authors (one)", () => {
    const authors = getAuthors("without-photo");
    expect(authors).toContainEqual({
      name: "Without Photo",
      email: "without-photo@email.com",
      photo: null,
    });
  });
  it("should return correct authors (few)", () => {
    const authors = getAuthors("without-photo, with-empty-photo");
    expect(authors).toContainEqual({
      name: "Without Photo",
      email: "without-photo@email.com",
      photo: null,
    });
    expect(authors).toContainEqual({
      name: "With Empty Photo",
      email: "with-empty-photo@email.com",
      photo: null,
    });
  });
});
afterEach(mock.restore);
