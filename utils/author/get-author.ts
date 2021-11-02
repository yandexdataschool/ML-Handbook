import path from "path";
import fs from "fs";
import matter from "gray-matter";
import slugify from "slugify";

export type Author = {
  name: string;
  email?: string;
  photo?: string;
};

const getPhoto = (authorNickname: string, photo: string): string | null => {
  if (photo) {
    const photoFileName = photo.slice(2).toLowerCase();

    return `/authors/${authorNickname}/${slugify(photoFileName)}`;
  }

  return null;
};

export const getAuthor = (authorNickname: string): Author => {
  const authorsPath = path.join(process.cwd(), "authors", authorNickname);
  const authorFilePath = path.join(authorsPath, "index.md");
  const source = fs.readFileSync(authorFilePath);
  const { data } = matter(source);
  const { name, email } = data;
  const photo = getPhoto(authorNickname, data.photo);

  return {
    name,
    email: email ?? null,
    photo,
  };
};

export const getAuthors = (authors: string): Author[] =>
  authors
    .split(", ")
    .filter((authorNickname) => !!authorNickname)
    .map((authorNickname) => getAuthor(authorNickname));
