import path from "path";
import fs from "fs";
import matter from "gray-matter";
import slugify from "slugify";

export type Author = {
  name: string;
  email: string;
  photo: string;
};

const getPhoto = (photo: string): string | null => {
  if (photo) {
    const photoFileName = photo.slice(2).toLowerCase();

    return `/authors/with-photo/${slugify(photoFileName)}`;
  }

  return null;
};

export const getAuthor = (nickname: string): Author => {
  const authorsPath = path.join(process.cwd(), "authors", nickname);
  const authorFilePath = path.join(authorsPath, "index.md");
  const source = fs.readFileSync(authorFilePath);
  const { data } = matter(source);
  const { name, email } = data;
  const photo = getPhoto(data.photo);

  return {
    name,
    email,
    photo,
  };
};
