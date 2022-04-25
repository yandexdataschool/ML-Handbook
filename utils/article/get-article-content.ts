import fs from "fs";
import path from "path";

import matter from "gray-matter";
import slugify from "slugify";

import { Author, getAuthors } from "../author/get-author";

export type FrontMatter = {
  title: string;
  description?: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  authors?: Author[];
};

export type Article = {
  content: string;
  frontMatter: FrontMatter;
  tableOfContents: {};
};

const getHeroImage = ({
  articlesFolder,
  slug,
  image,
}: {
  articlesFolder: string;
  slug: string;
  image: string;
}): string | null => {
  if (image) {
    const imageFileName = image.slice(2).toLowerCase();

    return `/${articlesFolder}/${slug}/images/${slugify(imageFileName)}`;
  }

  return null;
};

export const getArticleContent = (articlesFolder: string, slug: string): Article => {
  const articlePath = path.join(process.cwd(), articlesFolder, slug);

  let articleFilePath = path.join(articlePath, "index.mdx");
  if (!fs.existsSync(articleFilePath)) {
    articleFilePath = `${articlePath}.mdx`;
  }

  const source = fs.readFileSync(articleFilePath);

  const { content, data: frontMatter } = matter(source);

  const description = frontMatter.description ?? null;
  const heroImage =
    frontMatter.hero_image && frontMatter.hero_image_alt
      ? {
          src: getHeroImage({
            articlesFolder,
            slug,
            image: frontMatter.hero_image,
          }),
          alt: frontMatter.hero_image_alt,
        }
      : null;
  const authors = frontMatter.authors ? getAuthors(frontMatter.authors) : null;
  const tableOfContents = {};

  return {
    content,
    frontMatter: {
      title: frontMatter.title,
      description,
      heroImage,
      authors,
    },
    tableOfContents,
  };
};
